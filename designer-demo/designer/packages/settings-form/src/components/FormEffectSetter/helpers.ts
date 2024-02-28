export const GlobalHelper = `
 * Document Links
 * 
 * https://core.formilyjs.org/zh-CN/api/entry/form-effect-hooks
 * 
 * https://core.formilyjs.org/zh-CN/api/entry/field-effect-hooks
 **/
`;

export const CustomEffectHookHelper = `
/** 
 * Example 1
 * onFormMount
 **/

onFormMount(() => {
  console.log('onFormMount')
})


/** 
 * Example 2
 * onFieldInputValueChange
 **/

onFieldInputValueChange('target', (field) => {
  console.log('target 值变化：' + field.value)
})

${GlobalHelper}
`;

export const FormMountHelper = `
/** 
 * Example 1
 **/

onFormMount((form) => {
  console.log('onFormMount')
})
`;


export const FormUnmountHelper = `
/** 
 * Example 1
 **/

onFormUnmount((form) => {
  console.log('onFormUnmount')
})
`;


export const FormSubmitHelper = `
/** 
 * Example 1
 **/

onFormSubmit((form) => {
  console.log('onFormSubmit')
})
`;

export const FieldInitHelper = `
/** 
 * Example 1
 **/

onFieldInit(pattern, (field) => {
 
})
`;

export const FieldUnmountHelper = `
/** 
 * Example 1
 **/

onFieldUnmount(pattern, (field) => {
 
})
`;

export const FieldReactHelper = `
/** 
 * Example 1
 **/

onFieldReact(pattern, (field) => {
 
})
`;

export const FieldValueChangeHelper = `
/** 
 * Example 1
 **/

onFieldValueChange(pattern, (field) => {
 
})
`;

export const FieldInputValueChangeHelper = `
/** 
 * Example 1
 **/

onFieldInputValueChange(pattern, (field) => {
 
})
`;

export const genFunctionBodyCode = (functionName: string, functionBody) => {
  const valCode = `
${functionName}(pattern, (field) => {



  
})
`
  return valCode;
}
