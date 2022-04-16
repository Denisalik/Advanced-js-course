import { UserInfo } from "./entities";

export enum ActionStrings {
  LOGIN = "LOGIN",
  REGISTRATION = "REGISTRATION",
  RELOGIN = "RELOGIN",
  SAVE_TOKEN = "SAVE_TOKEN",
}

interface Login {
  type: ActionStrings.LOGIN;
  payload: string;
}

interface Registration {
  type: ActionStrings.REGISTRATION;
  payload: string;
}

interface Relogin {
  type: ActionStrings.RELOGIN;
  payload: UserInfo;
}

interface SaveToken {
  type: ActionStrings.SAVE_TOKEN;
  payload: string;
}

export type ActionTypes = Login | Registration | Relogin | SaveToken;
