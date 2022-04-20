/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  // https://javascript.plainenglish.io/the-practical-guide-to-start-react-testing-library-with-typescript-d386804a018
  //use jsdom if error happened
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/src/__test__/config/importJestDOM.ts"],
};
