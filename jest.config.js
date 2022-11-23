module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@tests/(.*)$": "<rootDir>/tests/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};
