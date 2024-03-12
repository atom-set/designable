import {
  FormEffectHookHelper,
  FieldEffectHookHelper
} from "./helpers";

const formEffectHooks = [
  'onFormInit',
  'onFormMount',
  'onFormUnmount',
  'onFormValuesChange',
  'onFormInitialValuesChange',
  'onFormInputChange',
  'onFormSubmit',
  'onFormReset',
  'onFormSubmitStart',
  'onFormSubmitEnd',
  'onFormSubmitSuccess',
  'onFormSubmitFailed',
  'onFormSubmitValidateStart',
  'onFormSubmitValidateSuccess',
  'onFormSubmitValidateFailed',
  'onFormSubmitValidateEnd',
  'onFormValidateStart',
  'onFormValidateSuccess',
  'onFormValidateFailed',
  'onFormValidateEnd',
  'onFormGraphChange',
  'onFormLoading',
  'onFormReact',
];

const fieldEffectHooks = [
  'onFieldInit',
  'onFieldMount',
  'onFieldUnmount',
  'onFieldValueChange',
  'onFieldInitialValueChange',
  'onFieldInputValueChange',
  'onFieldValidateStart',
  'onFieldValidateEnd',
  'onFieldValidating',
  'onFieldValidateFailed',
  'onFieldValidateSuccess',
  'onFieldSubmit',
  'onFieldSubmitStart',
  'onFieldSubmitEnd',
  'onFieldSubmitValidateStart',
  'onFieldSubmitValidateEnd',
  'onFieldSubmitSuccess',
  'onFieldSubmitFailed',
  'onFieldSubmitValidateSuccess',
  'onFieldSubmitValidateFailed',
  'onFieldReset',
  'onFieldLoading',
  'onFieldReact',
  'onFieldChange',
];

// 生成配置
const genFormEffectHookConfig = () => {
  return formEffectHooks.map((item) => {
    return {
      key: item,
      token: item,
      type: "function",
      helpCode: FormEffectHookHelper,
    }
  })
};

const genFieldEffectHookConfig = () => {
  return fieldEffectHooks.map((item) => {
    return {
      key: item,
      token: item,
      type: "function",
      helpCode: FieldEffectHookHelper,
    }
  })
};

export const FormHookProperties = genFormEffectHookConfig();

export const FieldHookProperties = genFieldEffectHookConfig();
