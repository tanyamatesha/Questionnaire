module.exports = {
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '^.+\\.(js|jsx|css|scss)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  modulePaths: [
    "<rootDir>"
  ],
  setupFilesAfterEnv: ['<rootDir>/setupReactTestingLibrary.js'],
}
