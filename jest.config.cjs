/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    // Change MODULE_NAME_HERE to your module that isn't being compiled
    // "/node_modules/(?!@mui).+\\.js$",
    "node_modules/(?!(@mui|@babel)/)"
  ],
  moduleNameMapper: {
    "@ijl.cli": "<rootDir>/ijl-cli.js",
  },
  testMatch: ["<rootDir>/__test__/*.(test|spec).(ts|tsx)"],
  verbose: true,
  collectCoverage: false,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "./src/**/*.ts?(x)",
  ],
  coverageDirectory: "<rootDir>/reports/coverage",
  coverageReporters: [
    [
      "html",
      { subdir: "html" },
    ],
  ],
};
//80% and at least 1 ui test
// https://javascript.plainenglish.io/the-practical-guide-to-start-react-testing-library-with-typescript-d386804a018