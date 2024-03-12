export const FormEffectHookHelper = `
/** 
 * Example 1
 **/
onFormMount((form) => {
  console.log('onFormMount')
})

/** 
 * Example 2
 **/
onFormSubmit((form) => {
  console.log('onFormMount')
})

* Document Links
* 
* https://core.formilyjs.org/zh-CN/api/entry/form-effect-hooks
**/
`;

export const FieldEffectHookHelper = `
/** 
 * Example 1
 **/
onFieldInit(pattern, (field) => {
 
})

/** 
 * Example 2
 **/
onFieldValueChange(pattern, (field) => {
 
})

* Document Links
* 
* https://core.formilyjs.org/zh-CN/api/entry/field-effect-hooks
**/
`;

export const getFormHooksBlockCode: (str: string) => string = (functionName: string) => {
  const valCode = `${functionName}((form) => {

  
})
`
  return valCode;
};

export const getFieldHooksBlockCode: (str: string) => string = (functionName: string) => {
  const valCode = `${functionName}('pattern', (field) => {

  
})
`
  return valCode;
};
