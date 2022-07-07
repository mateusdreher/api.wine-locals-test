/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,

  clearMocks: true,

  collectCoverage: false,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  testMatch: [
    "**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)",
    // "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },

  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

};
