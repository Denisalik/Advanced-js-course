export type GameEnvType = {
  frameRate: number;
  tableHeight: number;
  tableWidth: number;
  paddleHeight: number;
  paddleWidth: number;
  ballRadius: number;
  margin: number;
  tableCenter: Point;
  p1Location: Point;
  p2Location: Point;
};

type Point = {
  x: number;
  y: number;
};

export type GameStateType = {
  ball: BallType;
  p1: PlayerType;
  p2: PlayerType;
};

export type BallType = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
};

export type PlayerType = {
  x: number;
  y: number;
  score: number;
  name: string;
  paused: boolean;
};

export type GameData = {
  playerNumber: number; //1 or 2
  gameEnv: GameEnvType;
  gameState: GameStateType;
};
export type LocationUpdate = {
  playerNumber: number;
  newLocation: Point;
};
export type ScoreUpdate = {
  s1: number;
  s2: number;
};
export type WinnerUpdate = {
  winnerNumber: number;
};
export type Interrupt = {
  message: string;
};

export type JoinRoom = {
  playerName: string;
  roomName: string;
};
export type PauseGame = {
  playerNumber: number;
  roomName: string;
};

export type GameOver = {
  room: string;
};
export type MovePlayer = {
  playerNumber: number;
  direction: number;
  roomName: string;
};

export interface Game {
  env: GameEnvType;
  state: GameStateType;
}

export interface Player {
  name: string;
  number: number;
  direction: number;
}

export enum KeyboardKeys {
  Up = "ArrowUp",
  Down = "ArrowDown",
}
