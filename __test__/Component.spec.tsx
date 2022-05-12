import React from "react";
import { render, RenderResult, cleanup } from "@testing-library/react";
import { renderProviders } from "./test-utils";
import Auth from "../src/components/auth/Auth";
import "@testing-library/jest-dom";
import Home from "../src/components/home/Home";

let documentBody: RenderResult;
jest.useFakeTimers();

describe("Sign in", () => {
  afterAll(() => {
    jest.runAllTimers();
  });
  beforeEach(cleanup);
  it("jest config test", () => {});
  it("shows message", () => {
    documentBody = render(renderProviders(<Auth />));
    expect(
      documentBody.getByText(
        "If you already have an account, login to invite a friend to play with you."
      )
    ).toBeInTheDocument();
  });
  it("shows message connect", () => {
    documentBody = render(renderProviders(<Home />));
    expect(documentBody.getByText("Connect")).toBeInTheDocument();
  });
});
