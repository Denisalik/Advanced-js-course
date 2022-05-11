import {
  GameData,
  GameOver,
  Interrupt,
  JoinRoom,
  LocationUpdate,
  MovePlayer,
  PauseGame,
  ScoreUpdate,
  WinnerUpdate,
} from "./types";

export interface ServerToClientEvents {
  startGame: () => void /* Upon receiving this event, client should start listening for keydown (pressing
up/down arrow keys) and keyup (releasing them)
*/;

  gameData: (gameData: GameData) => void;
  locationUpdate: (locationUpdate: LocationUpdate) => void;
  scoreUpdate: (scoreUpdate: ScoreUpdate) => void;
  winnerUpdate: (winnerUpdate: WinnerUpdate) => void;
  interrupt: (interrupt: Interrupt) => void; // Game interrupted, client should stop the game and show the message.
}

export interface ClientToServerEvents {
  joinRoom: (joinRoom: JoinRoom, callback: (error: string) => void) => void;
  pauseGame: (createRoom: PauseGame, callback: (error: string) => void) => void;
  gameOver: (gameOver: GameOver) => void;
  movePlayer: (movePlayer: MovePlayer) => void;
}
