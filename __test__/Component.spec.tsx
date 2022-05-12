import React from "react";
import { render, RenderResult, cleanup } from "@testing-library/react";
import { renderProviders } from "./test-utils";
import Auth from "../src/components/auth/Auth";
import "@testing-library/jest-dom";

let documentBody: RenderResult;

describe("Sign in", () => {
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
});
