// @ts-check

/**
 * @type {import('@jest/types').Config.InitialOptions}
 **/
module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
  moduleNameMapper: {
    // Handle CSS inports (with CSS modules): https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    // Handle CSS imports (without CSS modules)
    "^.+(css|sass|scss)$": "<rootDir>/jest/mockStyle.js",
    // Handle image imports: https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": `<rootDir>/jest/mockFile.js`,
    // Absolute Imports and Module Path Aliases
    "src/(.*)": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transform: {
    // User babel-jest to transpile tests with the next/babel preset: https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presents: ["next/babael"] }],
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
  setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.js"],
  snapshotResolver: "<rootDir>/jest/jest.snapshot.js",
};
