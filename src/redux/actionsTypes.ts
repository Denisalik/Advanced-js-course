import { UserInfo } from "./entities";
import {
  GameData,
  Interrupt,
  LocationUpdate,
  ScoreUpdate,
  WinnerUpdate,
} from "../lib/socket/types";

export enum ActionStrings {
  //AUTH
  LOGIN = "LOGIN",
  REGISTRATION = "REGISTRATION",
  RELOGIN = "RELOGIN",
  SAVE_TOKEN = "SAVE_TOKEN",
  //GAME
  GAME_DATA = "GAME_DATA",
  START_GAME = "START_GAME",
  LOCATION_UPDATE = "LOCATION_UPDATE",
  SCORE_UPDATE = "SCORE_UPDATE",
  WINNER_UPDATE = "WINNER_UPDATE",
  INTERRUPT = "INTERRUPT",
  CHANGE_DIRECTION = "CHANGE_DIRECTION",
  VALIDATE_CONNECTION = "VALIDATE_CONNECTION",
  SAVE_ROOM = "SAVE_ROOM",
  PAUSE_GAME = "PAUSE_GAME",
}

interface ValidateConnection {
  type: ActionStrings.VALIDATE_CONNECTION;
  payload: string;
}

interface GetWinnerUpdate {
  type: ActionStrings.WINNER_UPDATE;
  payload: WinnerUpdate;
}

interface GetStartGame {
  type: ActionStrings.START_GAME;
}

interface GetInterrupt {
  type: ActionStrings.INTERRUPT;
  payload: Interrupt;
}

interface GetScoreUpdate {
  type: ActionStrings.SCORE_UPDATE;
  payload: ScoreUpdate;
}

interface GetLocationUpdate {
  type: ActionStrings.LOCATION_UPDATE;
  payload: LocationUpdate;
}

interface GetGameData {
  type: ActionStrings.GAME_DATA;
  payload: GameData;
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

interface SaveRoom {
  type: ActionStrings.SAVE_ROOM;
  payload: string;
}

interface ChangeDirection {
  type: ActionStrings.CHANGE_DIRECTION;
  payload: number;
}

interface PauseGame {
  type: ActionStrings.PAUSE_GAME;
}

export type ActionTypes =
  | Login
  | Registration
  | Relogin
  | SaveToken
  | GetGameData
  | GetLocationUpdate
  | GetScoreUpdate
  | GetWinnerUpdate
  | GetInterrupt
  | GetStartGame
  | ChangeDirection
  | ValidateConnection
  | SaveRoom
  | PauseGame;
