if (process.env.NODE_ENV === 'production') {
  require('./dist/main')
} else {
  // compile typescript on the fly
  require('ts-node/register')
  // patch 'require' so it follows tsconfig path settings
  require('tsconfig-paths/register')
  require('./src/main')
}
