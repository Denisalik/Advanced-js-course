import { ActionStrings } from "../../actionsTypes";
import { AccountSettings, GameSettings, UserInfo } from "../../entities";

export const actions = {
  changeGameSettings: (payload: GameSettings) => ({
    type: ActionStrings.CHANGE_GAME_SETTINGS,
    payload,
  }),
  changeAccountSettings: (payload: AccountSettings) => ({
    type: ActionStrings.CHANGE_ACCOUNT_SETTINGS,
    payload,
  }),
  login: (payload: string) => ({
    type: ActionStrings.LOGIN,
    payload,
  }),

  relogin: (payload: UserInfo) => ({
    type: ActionStrings.RELOGIN,
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
