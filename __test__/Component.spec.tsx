import React from "react";
import { render, RenderResult, cleanup } from "@testing-library/react";
import SignIn from "../src/components/auth/login/SignIn";
import { renderProviders } from "./test-utils";
import Auth from "../src/components/auth/Auth";

let documentBody: RenderResult;

describe("Sign in", () => {
  beforeEach(cleanup);
  it("shows message", () => {
    documentBody = render(renderProviders(<Auth />));
    expect(
      documentBody.getByText(
        "If you already have an account, login to invite a friend to play with you."
      )
    ).toBeInTheDocument();
    // expect(documentBody.getByText("404")).toBeInTheDocument();
  });
});
