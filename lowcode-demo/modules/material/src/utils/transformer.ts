import { ITreeNode } from "@designer/core";
import { clone, uid } from "@designer/shared";
import { IFormProps, } from "@formily/core";
import { ISchema, Schema } from "@formily/json-schema";
import { RequestSourceSetter } from "@designer/settings-form";

export interface ITransformerOptions {
  designableFieldName?: string;
  designableFormName?: string;
}

export interface IFormilySchema {
  schema?: ISchema;
  effect?: string[];
  scope?: Record<string, (field) => void>;
  form?: Record<string, any>;
}

export interface IDataSourceItemConfig {
  name: string;
  desc?: string;
  path: string;
  method: "GET" | "POST";
  requestParam?: Array<{
    paramKey: string;
    paramValue: string;
  }>;
  requestBody?: Array<{
    paramKey: string;
    paramValue: string;
  }>;
  requestHeader?: Array<{
    paramKey: string;
    paramValue: string;
  }>;
  requestAdapter?: string;
  responseAdapter?: string;
}

interface IEffectConfig {
  fieldHook: any;
  formHook: any;
  customHook: string;
}

const createOptions = (options: ITransformerOptions): ITransformerOptions => {
  return {
    designableFieldName: "Field",
    designableFormName: "Form",
    ...options,
  };
};

// form effect
export const parseFormEffect = (effects: IEffectConfig) => {
  const res = [];
  const { fieldHook = {}, formHook = {}, customHook = '' } = effects ?? {};

  for (let item in formHook) {
    if (formHook[item]) {
      res.push(formHook[item])
    }
  }

  for (let item in fieldHook) {
    if (fieldHook[item]) {
      res.push(fieldHook[item])
    }
  }

  if (customHook) {
    res.push(customHook)
  }

  return res;
}

// form scope
export const parseFormScope = (scopes) => {
  const result = {};
  for (let pos in scopes) {
    const item = scopes[pos];
    const config = item.config as IDataSourceItemConfig;

    const func = `(field) => {
      field.loading = true
      fetch('${config.path}', {
        method: '${config.method}',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((res) => res.json())
        .then((originRes) => (${config.responseAdapter})(originRes))
        .then((data) => {
          console.log('data:', data);
          field.dataSource = data
          field.loading = false
        })
    }`
    result[`${config.name}`] = `${func}`;
  }
  return result;
}

const findNode = (node: ITreeNode, finder?: (node: ITreeNode) => boolean) => {
  if (!node) return;
  if (finder?.(node)) return node;
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    if (findNode(node.children[i])) return node.children[i];
  }
  return;
};

export const transformToSchema = (
  node: ITreeNode,
  options?: ITransformerOptions,
): IFormilySchema => {
  const realOptions = createOptions(options!);
  const root = findNode(node, (child) => {
    return child.componentName === realOptions.designableFormName;
  });
  const schema = {
    type: "object",
    properties: {},
  };
  if (!root) return { schema };
  const createSchema = (node: ITreeNode, schema: ISchema = {}) => {
    if (node !== root) {
      Object.assign(schema, clone(node.props));
    }
    schema["x-designable-id"] = node.id;
    if (schema.type === "array") {
      if (node.children?.[0]) {
        if (
          node.children[0].componentName === realOptions.designableFieldName
        ) {
          schema.items = createSchema(node.children[0]);
          schema["x-index"] = 0;
        }
      }
      node.children?.slice(1).forEach((child, index) => {
        if (child.componentName !== realOptions.designableFieldName) return;
        const key = child.props?.["name"] || child.id;
        schema.properties = schema.properties || {};
        (schema.properties as any)[key] = createSchema(child);
        (schema.properties as any)[key]["x-index"] = index;
      });
    } else {
      node.children?.forEach((child, index) => {
        if (child.componentName !== realOptions.designableFieldName) return;
        const key = child.props?.["name"] || child.id;
        schema.properties = schema.properties || {};
        (schema.properties as any)[key] = createSchema(child);
        (schema.properties as any)[key]["x-index"] = index;
      });
    }
    return schema;
  };

  const cloneForm = clone(root.props);
  const effect = parseFormEffect(cloneForm?.effects);
  const scope = parseFormScope(cloneForm?.scope);
  console.log('scope:', scope)
  const res = {
    form: cloneForm,
    schema: createSchema(root, schema),
    scope: parseFormScope(cloneForm?.scope),
    effect: effect
  };
  console.log('res:', res);
  return res;
};

export const transformToTreeNode = (
  formily: IFormilySchema = {},
  options?: ITransformerOptions,
) => {
  const realOptions = createOptions(options!);
  const root: ITreeNode = {
    componentName: realOptions.designableFormName,
    props: formily.form,
    children: [],
  };
  const schema = new Schema(formily.schema!);
  const cleanProps = (props: any) => {
    if (props["name"] === props["x-designable-id"]) {
      delete props.name;
    }
    delete props["version"];
    delete props["_isJSONSchemaObject"];
    return props;
  };
  const appendTreeNode = (parent: ITreeNode, schema: Schema) => {
    if (!schema) return;
    const current = {
      id: schema["x-designable-id"] || uid(),
      componentName: realOptions.designableFieldName,
      props: cleanProps(schema.toJSON(false)),
      children: [],
    };
    parent.children?.push(current);
    if (schema.items && !Array.isArray(schema.items)) {
      appendTreeNode(current, schema.items);
    }
    schema.mapProperties((schema) => {
      schema["x-designable-id"] = schema["x-designable-id"] || uid();
      appendTreeNode(current, schema);
    });
  };
  schema.mapProperties((schema) => {
    schema["x-designable-id"] = schema["x-designable-id"] || uid();
    appendTreeNode(root, schema);
  });
  return root;
};
