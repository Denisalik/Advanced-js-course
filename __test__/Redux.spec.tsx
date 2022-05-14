import React from "react";
import { RenderResult, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { routes } from "../src/lib/routes";
import { reducer as auth } from "../src/redux/reducers/auth";
import { ActionStrings, ActionTypes } from "../src/redux/actionsTypes";

jest.useFakeTimers();

describe("Redux", () => {
  afterAll(() => {
    jest.runAllTimers();
  });
  beforeEach(cleanup);
  it("routes", () => {
    expect(routes.map(route => route.path)).toEqual([
      "/lichessengine/auth",
      "/lichessengine/home",
      "/lichessengine/settings",
    ]);
  });
  //   src/redux/action-creators/auth     |   30.76 |      100 |       0 |      35 |
  //   index.ts
  //   src/redux/action-creators/game     |   55.43 |     8.33 |   47.36 |   54.54 |
  //   index.ts
  //   src/redux/actions/auth             |      25 |      100 |       0 |      25 |
  //   index.ts                          |      25 |      100 |       0 |      25 | 5-27
  //  src/redux/actions/game             |   16.66 |      100 |       0 |   16.66 |
  //   index.ts
  //   src/redux/reducers/auth            |   54.54 |    28.57 |     100 |      50 |
  //   index.ts                          |   54.54 |    28.57 |     100 |      50 | 30-42
  //  src/redux/reducers/game            |      25 |     9.09 |     100 |   21.73 |
  //   index.ts
  it("action-creator auth", () => {
    const initialState = {
      token: "",
      email: "",
      username: "",
      background: 1,
      avatar: 1,
      expirationDate: new Date(0),
    };
    const token = "asd";
    expect(
      auth(undefined, { type: ActionStrings.SAVE_TOKEN, payload: token }).token
    ).toEqual(token);
  });
});
