// @ts-nocheck
import { TreeNode } from "@designer/core";
import {
  ArrayCards,
  ArrayTable,
  Cascader,
  Checkbox,
  DatePicker,
  Editable,
  Form,
  FormButtonGroup,
  FormCollapse,
  FormGrid,
  FormItem,
  FormLayout,
  FormTab,
  Input,
  NumberPicker,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
} from "@formily/antd";
import {
  createForm, onFormInit,
  onFormMount,
  onFormUnmount,
  onFormValuesChange,
  onFormInitialValuesChange,
  onFormInputChange,
  onFormSubmit,
  onFormReset,
  onFormSubmitStart,
  onFormSubmitEnd,
  onFormSubmitSuccess,
  onFormSubmitFailed,
  onFormSubmitValidateStart,
  onFormSubmitValidateSuccess,
  onFormSubmitValidateFailed,
  onFormSubmitValidateEnd,
  onFormValidateStart,
  onFormValidateSuccess,
  onFormValidateFailed,
  onFormValidateEnd,
  onFormGraphChange,
  onFormLoading,
  onFormReact,
  onFieldInit,
  onFieldMount,
  onFieldUnmount,
  onFieldValueChange,
  onFieldInitialValueChange,
  onFieldInputValueChange,
  onFieldValidateStart,
  onFieldValidateEnd,
  onFieldValidating,
  onFieldValidateFailed,
  onFieldValidateSuccess,
  onFieldSubmit,
  onFieldSubmitStart,
  onFieldSubmitEnd,
  onFieldSubmitValidateStart,
  onFieldSubmitValidateEnd,
  onFieldSubmitSuccess,
  onFieldSubmitFailed,
  onFieldSubmitValidateSuccess,
  onFieldSubmitValidateFailed,
  onFieldReset,
  onFieldLoading,
  onFieldReact,
  onFieldChange,
  Field,
} from "@formily/core";
import { createSchemaField } from "@formily/react";
import { Card, Rate, Slider } from "antd";
import React, { useMemo } from "react";
import { transformToSchema } from "@renderer/shared";
import { clone } from "@designer/shared";

const effectHookScope = {
  onFormInit,
  onFormMount,
  onFormUnmount,
  onFormValuesChange,
  onFormInitialValuesChange,
  onFormInputChange,
  onFormSubmit,
  onFormReset,
  onFormSubmitStart,
  onFormSubmitEnd,
  onFormSubmitSuccess,
  onFormSubmitFailed,
  onFormSubmitValidateStart,
  onFormSubmitValidateSuccess,
  onFormSubmitValidateFailed,
  onFormSubmitValidateEnd,
  onFormValidateStart,
  onFormValidateSuccess,
  onFormValidateFailed,
  onFormValidateEnd,
  onFormGraphChange,
  onFormLoading,
  onFormReact,
  onFieldInit,
  onFieldMount,
  onFieldUnmount,
  onFieldValueChange,
  onFieldInitialValueChange,
  onFieldInputValueChange,
  onFieldValidateStart,
  onFieldValidateEnd,
  onFieldValidating,
  onFieldValidateFailed,
  onFieldValidateSuccess,
  onFieldSubmit,
  onFieldSubmitStart,
  onFieldSubmitEnd,
  onFieldSubmitValidateStart,
  onFieldSubmitValidateEnd,
  onFieldSubmitSuccess,
  onFieldSubmitFailed,
  onFieldSubmitValidateSuccess,
  onFieldSubmitValidateFailed,
  onFieldReset,
  onFieldLoading,
  onFieldReact,
  onFieldChange,
}


const Text: React.FC<{
  value?: string;
  content?: string;
  mode?: "normal" | "h1" | "h2" | "h3" | "p";
}> = ({ value, mode, content, ...props }) => {
  const tagName = mode === "normal" || !mode ? "div" : mode;
  return React.createElement(tagName, props, value || content);
};

const SchemaField = createSchemaField({
  components: {
    Space,
    FormGrid,
    FormLayout,
    FormTab,
    FormCollapse,
    ArrayTable,
    ArrayCards,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    Text,
    NumberPicker,
    Switch,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Submit,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    Card,
    Slider,
    Rate,
  },
});

export interface IPreviewWidgetProps {
  tree: TreeNode;
}

export const PreviewWidget: React.FC<
  React.PropsWithChildren<IPreviewWidgetProps>
> = (props) => {
  const form = useMemo(() => createForm(), []);
  const { form: formProps, schema, api, effectHooks = [], scopes = [] } = transformToSchema(props.tree);

  const cloneFormProps = clone(formProps);

  if (cloneFormProps.api) {
    delete cloneFormProps.api;
  }
  if (cloneFormProps.effectHooks) {
    delete cloneFormProps.effectHooks;
  }

  if (cloneFormProps.scopes) {
    delete cloneFormProps.scopes;
  }

  const formScope = useMemo(() => {
    let scopeRes: any = {};
    for (let i = 0; i < scopes.length; i++) {
      const requestHandler = api[scopes[i]];
      const func = new Function('$root', `with($root) { return ${requestHandler}; }`)
      scopeRes[scopes[i]] = (field) => {
        new Function('$root', `with($root) { return ${requestHandler}; }`)({})(field)
          .then((res: { content: Field, data: FieldDataSource }) => {
            res.content.dataSource = res.data;
          })
      }
    }
    return scopeRes;
  }, []);

  form.addEffects(form.id, () => {
    effectHooks.forEach((item) => {
      let expression = `() => {\n ${item} \n}`
      // eslint-disable-next-line no-new-func
      new Function('$root', `with($root) { return ${expression}; }`)(effectHookScope)()
    })
  })

  return (
    <Form {...cloneFormProps} form={form}>
      <SchemaField
        schema={schema}
        scope={formScope}
      />
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>提交</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup.FormItem>
    </Form>
  );
};
