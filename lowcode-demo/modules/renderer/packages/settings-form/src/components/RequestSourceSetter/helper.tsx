export const requestAdapterCode = `const requestAdapter = (options, context) => {
  // 此处的返回值会作为这个接口的入参
  return options;
}
`

export const responseAdapterCode = `(response, context) => {
  // 此处的返回值会作为这个接口的返回值
  return response;
}`