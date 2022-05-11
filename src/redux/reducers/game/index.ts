import { ActionStrings, ActionTypes } from "../../actionsTypes";
import { Game, Player } from "../../../lib/socket/types";

interface GameState {
  //state of the game
  game: Game;
  player: Player;
  room: string;
  //state helpers for the frontend
  started: boolean;
  winnerNumber: number;
  message: string;
  error: string;
}

const initialState: GameState = {
  game: {
    state: {
      ball: {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        speed: 0,
      },
      p1: {
        x: 0,
        y: 0,
        score: 0,
        name: "",
        paused: true,
      },
      p2: {
        x: 0,
        y: 0,
        score: 0,
        name: "",
        paused: true,
      },
    },
    env: {
      ballRadius: 0,
      frameRate: 0,
      margin: 0,
      p1Location: {
        y: 0,
        x: 0,
      },
      p2Location: {
        y: 0,
        x: 0,
      },
      paddleHeight: 0,
      paddleWidth: 0,
      tableHeight: 0,
      tableWidth: 0,
      tableCenter: {
        y: 0,
        x: 0,
      },
    },
  },
  player: {
    direction: 0,
    number: 0,
    name: "",
  },
  room: "",
  started: false,
  winnerNumber: -1, //todo change
  message: "",
  error: "",
};

export const reducer = (
  state: GameState = initialState,
  action: ActionTypes
): GameState => {
  switch (action.type) {
    case ActionStrings.GAME_DATA:
      return {
        ...state,
        game: { env: action.payload.gameEnv, state: action.payload.gameState },
        player: {
          name:
            action.payload.playerNumber === 1
              ? action.payload.gameState.p1.name
              : action.payload.gameState.p2.name,
          number:
            state.player.number === 0
              ? action.payload.playerNumber
              : state.player.number,
          direction: 0,
        },
      };
    case ActionStrings.SAVE_ROOM:
      return {
        ...state,
        room: action.payload,
      };
    case ActionStrings.CHANGE_DIRECTION:
      return {
        ...state,
        player: { ...state.player, direction: action.payload },
      };
    case ActionStrings.START_GAME:
      return { ...state, started: true };
    case ActionStrings.LOCATION_UPDATE:
      switch (action.payload.playerNumber) {
        case 0:
          return {
            ...state,
            game: {
              ...state.game,
              state: {
                ...state.game.state,
                ball: {
                  ...state.game.state.ball,
                  x: action.payload.newLocation.x,
                  y: action.payload.newLocation.y,
                },
              },
            },
          };
        case 1:
          return {
            ...state,
            game: {
              ...state.game,
              state: {
                ...state.game.state,
                p1: {
                  ...state.game.state.p1,
                  x: action.payload.newLocation.x,
                  y: action.payload.newLocation.y,
                },
              },
            },
          };
        case 2:
          return {
            ...state,
            game: {
              ...state.game,
              state: {
                ...state.game.state,
                p2: {
                  ...state.game.state.p2,
                  x: action.payload.newLocation.x,
                  y: action.payload.newLocation.y,
                },
              },
            },
          };
        default:
          return state;
      }
    case ActionStrings.SCORE_UPDATE:
      return {
        ...state,
        game: {
          ...state.game,
          state: {
            ...state.game.state,
            p1: { ...state.game.state.p1, score: action.payload.s1 },
            p2: { ...state.game.state.p2, score: action.payload.s2 },
          },
        },
      };
    case ActionStrings.PAUSE_GAME:
      if (state.player.number === 1)
        return {
          ...state,
          game: {
            ...state.game,
            state: {
              ...state.game.state,
              p1: {
                ...state.game.state.p1,
                paused: !state.game.state.p1.paused,
              },
            },
          },
        };
      if (state.player.number === 2)
        return {
          ...state,
          game: {
            ...state.game,
            state: {
              ...state.game.state,
              p2: {
                ...state.game.state.p2,
                paused: !state.game.state.p2.paused,
              },
            },
          },
        };
      return state;
    //todo delete???
    case ActionStrings.WINNER_UPDATE:
      // if (state.player.number === action.payload.winnerNumber) {
      //   alert("You Won!");
      // } else {
      //   alert("You Lost!");
      // }
      return {
        game: {
          state: {
            ball: {
              x: 0,
              y: 0,
              vx: 0,
              vy: 0,
              speed: 0,
            },
            p1: {
              x: 0,
              y: 0,
              score: state.game.state.p1.score,
              name: state.game.state.p1.name,
              paused: true,
            },
            p2: {
              x: 0,
              y: 0,
              score: state.game.state.p2.score,
              name: state.game.state.p2.name,
              paused: true,
            },
          },
          env: {
            ballRadius: 0,
            frameRate: 0,
            margin: 0,
            p1Location: {
              y: 0,
              x: 0,
            },
            p2Location: {
              y: 0,
              x: 0,
            },
            paddleHeight: 0,
            paddleWidth: 0,
            tableHeight: 0,
            tableWidth: 0,
            tableCenter: {
              y: 0,
              x: 0,
            },
          },
        },
        player: {
          direction: 0,
          number: 0,
          name: "",
        },
        room: "",
        started: false,
        winnerNumber: action.payload.winnerNumber,
        message: "",
        error: "",
      };
    //todo same as above
    case ActionStrings.INTERRUPT:
      return { ...state, message: action.payload.message };
    case ActionStrings.VALIDATE_CONNECTION:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
