export const sendLog = (show = true, ...args) => {
  if (show) {
    // const fStream = fsExtra.createWriteStream(__dirname + '/log/20240119-001');
    // fStream.write(args, 'utf-8')
    // fStream.on('finish', () => { })
    // fStream.on('error', err => { })
    // fStream.end()
    console.log(...args)
  }
}
