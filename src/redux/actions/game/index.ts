import { ActionStrings } from "../../actionsTypes";
import {
  GameData,
  Interrupt,
  LocationUpdate,
  ScoreUpdate,
  WinnerUpdate,
} from "../../../lib/socket/types";

export const actions = {
  gameData: (payload: GameData) => ({
    type: ActionStrings.GAME_DATA,
    payload,
  }),
  pauseGame: () => ({
    type: ActionStrings.PAUSE_GAME,
  }),
  saveRoom: (payload: string) => ({
    type: ActionStrings.SAVE_ROOM,
    payload,
  }),
  startGame: () => ({
    type: ActionStrings.START_GAME,
  }),
  locationUpdate: (payload: LocationUpdate) => ({
    type: ActionStrings.LOCATION_UPDATE,
    payload,
  }),
  scoreUpdate: (payload: ScoreUpdate) => ({
    type: ActionStrings.SCORE_UPDATE,
    payload,
  }),
  winnerUpdate: (payload: WinnerUpdate) => ({
    type: ActionStrings.WINNER_UPDATE,
    payload,
  }),
  interrupt: (payload: Interrupt) => ({
    type: ActionStrings.INTERRUPT,
    payload,
  }),
  changeDirection: (payload: number) => ({
    type: ActionStrings.CHANGE_DIRECTION,
    payload,
  }),
  validateConnection: (payload: string) => ({
    type: ActionStrings.VALIDATE_CONNECTION,
    payload,
  }),
};
