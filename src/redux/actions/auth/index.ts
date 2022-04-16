import { ActionStrings } from "../../actionsTypes";
import { UserInfo } from "../../entities";

export const actions = {
  login: (payload: string) => ({
    type: ActionStrings.LOGIN,
    payload,
  }),

  relogin: (payload: UserInfo) => ({
    type: ActionStrings.LOGIN,
    payload,
  }),

  registration: (payload: string) => ({
    type: ActionStrings.REGISTRATION,
    payload,
  }),
  saveToken: (payload: string) => ({
    type: ActionStrings.SAVE_TOKEN,
    payload,
  }),
};
