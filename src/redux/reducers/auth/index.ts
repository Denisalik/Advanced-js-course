import { ActionStrings, ActionTypes } from "../../actionsTypes";

interface AuthState {
  token: string;
  email: string;
  username: string;
  background: number;
  avatar: number;
  expirationDate: Date;
}

const initialState: AuthState = {
  token: "",
  email: "",
  username: "",
  background: 1,
  avatar: 1,
  expirationDate: new Date(0),
};
//todo save in localStorage
export const reducer = (
  state: AuthState = initialState,
  action: ActionTypes
): AuthState => {
  switch (action.type) {
    //todo is it needed to change?
    // case ActionStrings.CHANGE_ACCOUNT_SETTINGS:
    //   return { ...state, avatar: action.payload. };
    case ActionStrings.CHANGE_GAME_SETTINGS:
      return {
        ...state,
        avatar: action.payload.avatar,
        background: action.payload.background,
      };
    case ActionStrings.SAVE_TOKEN:
      return { ...state, token: action.payload };
    case ActionStrings.LOGIN:
      return { ...state, token: action.payload };
    case ActionStrings.REGISTRATION:
      return { ...state, token: action.payload };
    case ActionStrings.RELOGIN:
      return {
        ...state,
        email: action.payload.email,
        background: action.payload.background,
        username: action.payload.username,
        avatar: action.payload.avatar,
        expirationDate: new Date(action.payload.exp),
      };
    default:
      return state;
  }
};
