export const sendLog = (show = true, ...args) => {
  if (show) {
    console.log(...args)
  }
}
