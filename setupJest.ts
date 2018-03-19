// custom matchers

// fix issue where the module 'config'
// could not be loaded because the folder in s
process.env.NODE_CONFIG_DIR = process.cwd() + '/src/config'
