module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  testMatch: ['**/*.{spec,test}.{js,ts}'],
  testEnvironment: 'node',
};
