import React from "react";
import { render, RenderResult, cleanup } from "@testing-library/react";
import { renderProviders } from "./test-utils";
import Auth from "../src/components/auth/Auth";
import Modal from "../src/components/home/Modal";
import "@testing-library/jest-dom";
import Home from "../src/components/home/Home";
import SignUp from "../src/components/auth/registration/SignUp";
import Background from "../src/components/home/Background/Background";
import Copy from "../src/components/shared/icons/Copy";
import Resume from "../src/components/shared/icons/Resume";
import Wrapper from "../src/components/wrapper/Wrapper";
import SignIn from "../src/components/auth/login/SignIn";
import BackgroundIcon from "../src/components/shared/icons/BackgroundIcon";
import GameSettings from "../src/components/home/Modal/GameSettings";
import AccountSettings from "../src/components/home/Modal/AccountSettings";

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
  it("shows message on registration component", () => {
    documentBody = render(renderProviders(<SignUp />));
    expect(
      documentBody.getByText(
        "If you already have an account, login to invite a friend to play with you."
      )
    ).toBeInTheDocument();
  });
  it("Check styling of Background", () => {
    documentBody = render(renderProviders(<Background />));
    expect(documentBody.container.firstChild).toHaveStyle({ height: "100vh" });
  });
  it("Render of button in Modal", () => {
    documentBody = render(renderProviders(<Modal />));
    expect(documentBody.getByText("Cancel")).toBeInTheDocument();
  });
  it("Children count in Copy component", () => {
    documentBody = render(renderProviders(<Copy />));
    expect(documentBody.container.childElementCount).toEqual(1);
  });
  it("Children count in Resume component", () => {
    documentBody = render(renderProviders(<Resume />));
    expect(documentBody.container.childElementCount).toEqual(1);
  });
  it("Wrapper should render auth component", () => {
    documentBody = render(renderProviders(<Wrapper />));
    expect(
      documentBody.getByText(
        "If you already have an account, login to invite a friend to play with you."
      )
    ).toBeInTheDocument();
  });
  //todo
  it("show game link text", () => {
    documentBody = render(renderProviders(<Home />));
    expect(documentBody.getByText("Game link")).toBeInTheDocument();
  });
  it("Sign In text", () => {
    documentBody = render(renderProviders(<SignIn />));
    expect(documentBody.getByText("Sign In")).toBeInTheDocument();
  });
  it("background rendering", () => {
    render(renderProviders(<Background />));
  });
  it("SignUp rendering", () => {
    render(renderProviders(<SignUp />));
  });
  it("Background Icon Check rendering", () => {
    render(renderProviders(<BackgroundIcon iconVariant={0} />));
  });
  it("Game Settings test", () => {
    render(
      renderProviders(
        <GameSettings
          background={0}
          avatar={0}
          setAvatar={(avatar: number) => {
            throw new Error("Function not implemented.");
          }}
          setBackground={(background: number) => {
            throw new Error("Function not implemented.");
          }}
        />
      )
    );
  });
  it("Account settings test", () => {
    render(
      renderProviders(
        <AccountSettings
          username=""
          password=""
          newUsername=""
          setUsername={(username: string) => {
            throw new Error("Function not implemented.");
          }}
          setPassword={(password: string) => {
            throw new Error("Function not implemented.");
          }}
          setNewUsername={(newUsername: string) => {
            throw new Error("Function not implemented.");
          }}
          errorUsername={false}
          errorPassword={false}
          errorNewUsername={false}
        />
      )
    );
  });
  it("Modal Index rendering", () => {
    render(renderProviders(<Modal />));
  });
});
