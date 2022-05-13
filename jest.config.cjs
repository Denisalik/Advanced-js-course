/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    // If you have error about imports from node_modules, that means they are using ESM and you need to ignore them.
    "node_modules/(?!(@mui|@babel)/)",
  ],
  moduleNameMapper: {
    "@ijl.cli": "<rootDir>/ijl-cli.js",
  },
  testMatch: ["<rootDir>/__test__/*.(test|spec).(ts|tsx)"],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.ts?(x)",
  ],
  coverageDirectory: "<rootDir>/reports/coverage",
  coverageReporters: [
    [
      "html",
      { subdir: "html" },
    ],["text"]
  ],
};
//80% and at least 1 ui test
