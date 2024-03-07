import {
  FormMountHelper,
  FormUnmountHelper,
  FormSubmitHelper,
  FieldInitHelper,
  FieldUnmountHelper,
  FieldReactHelper,
  FieldValueChangeHelper,
  FieldInputValueChangeHelper,
} from "./helpers";

export const FormHookProperties = [
  {
    key: "onFormMount",
    token: "onFormMount",
    type: "function",
    helpCode: FormMountHelper,
  },
  {
    key: "onFormUnmount",
    token: "onFormUnmount",
    type: "function",
    helpCode: FormUnmountHelper,
  },
  {
    key: "onFormSubmit",
    token: "onFormSubmit",
    type: "function",
    helpCode: FormSubmitHelper,
  },
];

export const FieldHookProperties = [
  {
    key: "onFieldInit",
    token: "onFieldInit",
    type: "function",
    helpCode: FieldInitHelper,
  },
  {
    key: "onFieldUnmount",
    token: "onFieldUnmount",
    type: "function",
    helpCode: FieldUnmountHelper,
  },
  {
    key: "onFieldReact",
    token: "onFieldReact",
    type: "function",
    helpCode: FieldReactHelper,
  },
  {
    key: "onFieldValueChange",
    token: "onFieldValueChange",
    type: "function",
    helpCode: FieldValueChangeHelper,
  },
  {
    key: "onFieldInputValueChange",
    token: "onFieldInputValueChange",
    type: "function",
    helpCode: FieldInputValueChangeHelper,
  },
];
