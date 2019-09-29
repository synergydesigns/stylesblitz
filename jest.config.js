module.exports = {
  preset: 'ts-jest',
  setupFiles: [
    'react-app-polyfill/jsdom',
    '<rootDir>/.jest/register-context.js',
    '<rootDir>/.jest/setup.js',
  ],
  transform: {
    '.(ts|tsx|js)': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
