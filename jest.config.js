/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  verbose: true,
  preset: "ts-jest",
  // preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/__test__/config/importJestDOM.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/.*"],
  //this shows another error
  //syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
  // transform: {
  //   "node_modules/@mui/.+\\.(j|t)sx?$": "ts-jest",
  // },
  // transformIgnorePatterns: ["node_modules/(?!@mui/.*)"],
  testMatch: ["<rootDir>/__test__/*.(test|spec).(ts|tsx)"],
};

//80% and at least 1 ui test
// https://javascript.plainenglish.io/the-practical-guide-to-start-react-testing-library-with-typescript-d386804a018
// error -> try to commit files first -> test
