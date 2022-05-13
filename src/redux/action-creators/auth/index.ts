import axios from "axios";
import { Dispatch } from "redux";
import { actions } from "../../actions";
import {
  Credentials,
  Token,
  CredentialsRegistration,
  UserInfo,
} from "../../entities";
import {
  changeAccountSettingsURL,
  changeGameSettingsURL,
  loginURL,
  registrationURL,
  reloginURL,
} from "../../api/auth";

const expPeriod = 86400;

export const changeGameSettings =
  (avatar: number, background: number, username: string) =>
  async (dispatch: Dispatch) => {
    const payload = { avatar, background, username };
    await axios
      .post(changeGameSettingsURL(), payload)
      .then(response => {
        dispatch(actions.changeGameSettings(payload));
      })
      .catch(e => {
        console.log(e.message);
      });
  };

export const changeAccountSettings =
  (username: string, password: string, newUsername: string) =>
  async (dispatch: Dispatch) => {
    const payload = { username, password, newUsername };
    await axios
      .post(changeAccountSettingsURL(), payload)
      .then(response => {
        dispatch(actions.changeAccountSettings(payload));
      })
      .catch(e => {
        console.log(e.message);
      });
  };

export const login =
  (credentials: Credentials) => async (dispatch: Dispatch) => {
    await axios
      .post<Token>(loginURL(), credentials)
      .then(response => {
        const { token } = response.data;
        dispatch(actions.login(token));
        localStorage.setItem("token", token);
        localStorage.setItem(
          "exp",
          new Date(new Date().getTime() + expPeriod).toISOString()
        );
      })
      .catch(e => {
        console.log(e.message);
      });
  };

export const saveToken = (token: string) => async (dispatch: Dispatch) => {
  dispatch(actions.saveToken(token));
};

export const registration =
  (credentials: CredentialsRegistration) => async (dispatch: Dispatch) => {
    await axios
      .post<Token>(registrationURL(), credentials)
      .then(response => {
        const { token } = response.data;
        dispatch(actions.registration(token));
        localStorage.setItem("token", token);
        localStorage.setItem(
          "exp",
          new Date(new Date().getTime() + expPeriod).toISOString()
        );
      })
      .catch(e => {
        console.log(e.message);
      });
  };

export const relogin = (token: Token) => async (dispatch: Dispatch) => {
  await axios
    .post<UserInfo>(reloginURL(), token)
    .then(response => {
      dispatch(actions.relogin(response.data));
    })
    .catch(e => {
      console.log(e.message);
    });
};
