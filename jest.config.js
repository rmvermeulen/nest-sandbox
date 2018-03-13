module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupTestFrameworkScriptFile: './setupJest.ts',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec ))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@controllers/(.*)': '<rootDir>/src/app/controllers/$1',
    '@modules/(.*)': '<rootDir>/src/app/modules/$1',
    '@middlewares/(.*)': '<rootDir>/src/app/middlewares/$1',
    '@entities/(.*)': '<rootDir>/src/app/entities/$1',
    '@services/(.*)': '<rootDir>/src/app/services/$1',
  },
}
