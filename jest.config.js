module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupTestFrameworkScriptFile: './setupJest.ts',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@modules/(.*)': '<rootDir>/src/app/modules/$1',
    '@middlewares/(.*)': '<rootDir>/src/app/middlewares/$1',
    '@services/(.*)': '<rootDir>/src/app/services/$1',
  },
  testEnvironment: 'node',
}
