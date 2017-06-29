const path = require('path');

module.exports = {
  publicPath: '/',
  staticPath: path.resolve(process.cwd(), 'dist'),
  rootPath: process.cwd(),
  srcPath: path.resolve(process.cwd(), 'src'),
  classPath: path.resolve(process.cwd(), 'src/class'),
  assetsPath: path.resolve(process.cwd(), 'src/assets'),
  testPath: path.resolve(process.cwd(), 'src/test'),
  libPath: path.resolve(process.cwd(), 'node_modules'),
  masterPath: path.resolve(process.cwd(), 'config', 'Fq.jpeg')
}