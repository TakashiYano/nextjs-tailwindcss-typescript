const nextJest = require("next/jest");

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({ dir: "./" });

// Add any custom config to be passed to Jest
/**
 * @type {import('@jest/types').Config.InitialOptions}
 **/
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  modulePathIgnorePatterns: ["<rootDir>/e2e/"],
  moduleNameMapper: { "src/(.*)": "<rootDir>/src/$1" }, // Handle module aliases (this will be automatica11y configured for you soon)
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
