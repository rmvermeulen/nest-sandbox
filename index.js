// fix issue where the module 'config'
// could not be loaded because the folder in s
process.env.NODE_CONFIG_DIR = __dirname + '/src/config'

if (process.env.NODE_ENV === 'production') {
  require('./dist/main')
} else {
  // compile typescript on the fly
  require('ts-node/register')
  // patch 'require' so it follows tsconfig path settings
  require('tsconfig-paths/register')
  require('./src/main')
}
