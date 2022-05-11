import { Dispatch } from "redux";
import { io, Socket } from "socket.io-client";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../../../lib/socket/events";
import { socketURL } from "../../api/auth";
import { actions } from "../../actions";
import { store } from "../../store";

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

export const joinRoom =
  (emitPlayerName: string, emitRoomName: string) =>
  async (dispatch: Dispatch) => {
    if (!socket) socket = io(socketURL());
    dispatch(actions.saveRoom(emitRoomName));
    socket.emit(
      "joinRoom",
      {
        playerName: emitPlayerName,
        roomName: emitRoomName,
      },
      error => {
        console.log(error);
        dispatch(actions.validateConnection(error)); //todo delete validation
      }
    );
  };

export const pauseGame = () => async (dispatch: Dispatch) => {
  if (!socket) socket = io(socketURL());
  const { player, room: roomName } = store.getState().game;
  const { number: playerNumber } = player;
  dispatch(actions.pauseGame());
  socket.emit(
    "pauseGame",
    {
      playerNumber,
      roomName,
    },
    error => {
      console.log(error);
    }
  );
};
export const movePlayer = () => async () => {
  if (!socket) socket = io(socketURL());
  const { player, room: roomName } = store.getState().game;
  const { direction, number: playerNumber } = player;
  if (direction) {
    socket.emit("movePlayer", {
      playerNumber,
      direction,
      roomName,
    });
  }
};

export const gameData = () => async (dispatch: Dispatch) => {
  if (!socket) socket = io(socketURL());
  socket.on("gameData", payload => {
    dispatch(actions.gameData(payload));
  });
};

export const changeDirection =
  (direction: number) => async (dispatch: Dispatch) => {
    if (!socket) socket = io(socketURL());
    if (store.getState().game.player.direction !== direction)
      dispatch(actions.changeDirection(direction));
  };
export const startGame = () => async (dispatch: Dispatch) => {
  if (!socket) socket = io(socketURL());
  socket.on("startGame", () => {
    dispatch(actions.startGame());
  });
};

export const locationUpdate = () => async (dispatch: Dispatch) => {
  if (!socket) socket = io(socketURL());
  socket.on("locationUpdate", payload => {
    dispatch(actions.locationUpdate(payload));
  });
};

export const scoreUpdate = () => async (dispatch: Dispatch) => {
  if (!socket) socket = io(socketURL());
  socket.on("scoreUpdate", payload => {
    dispatch(actions.scoreUpdate(payload));
  });
};
export const winnerUpdate = (room: string) => async (dispatch: Dispatch) => {
  if (!socket) socket = io(socketURL());
  socket.on("winnerUpdate", payload => {
    dispatch(actions.winnerUpdate(payload));
    socket.emit("gameOver", { room });
  });
};
export const interrupt = () => async (dispatch: Dispatch) => {
  if (!socket) socket = io(socketURL());
  socket.on("interrupt", payload => {
    dispatch(actions.interrupt(payload));
  });
};
