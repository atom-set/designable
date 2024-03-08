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
  const { form: formProps, schema, scope, effect = [] } = transformToSchema(props.tree);

  const cloneFormProps = clone(formProps);

  if (cloneFormProps.scope) {
    delete cloneFormProps.scope;
  }
  if (cloneFormProps.effects) {
    delete cloneFormProps.effects;
  }

  const newScope = useMemo(() => {
    let scopeRes: any = {};
    for (let [key, value] of Object.entries(scope ?? {})) {
      scopeRes[key] = new Function(`{ return ${value}; } `)()
    }
    return scopeRes;
  }, []);

  form.addEffects(form.id, () => {
    effect.forEach((item) => {
      let expression = `() => {\n ${item} \n}`
      // eslint-disable-next-line no-new-func
      new Function('$root', `with($root) { return ${expression}; }`)(effectHookScope)()
    })
  })

  return (
    <Form {...cloneFormProps} form={form}>
      <SchemaField schema={schema} scope={newScope} />
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>提交</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup.FormItem>
    </Form>
  );
};
