/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.[j|t]sx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    // "\\.tsx?$": "ts-jest",
    // "\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/__test__./*./","node_modules/@mui/", "node_modules/@ijl/.*"],
  //this shows another error
  // transform: {
  //   "node_modules/@mui/.+\\.(j|t)sx?$": "ts-jest",
  // },
  // transformIgnorePatterns: ["node_modules/(?!@mui/.*)"],
  // moduleNameMapper: {
  //   "^@ijl/cli$": "<rootDir>/ijl.cli.js",
  // },
  testMatch: ["<rootDir>/__test__/*.(test|spec).(ts|tsx)"],
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest",
  // },
  // testEnvironment: "jsdom",

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