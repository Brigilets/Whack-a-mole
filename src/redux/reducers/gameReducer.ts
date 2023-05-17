import { Position } from "../../lib/gameTypes";
import {
  SET_TIME,
  SET_SCORE,
  SET_GAME_OVER,
  SET_GAME_STARTED,
  SET_HOLE_POSITIONS,
} from "../actions/actionTypes";

export const initialHolePositions = [
  { x: 0, y: 0 }, // Mole
  { x: 100, y: 0 },
  { x: 200, y: 0 },
  { x: 300, y: 0 },
  { x: 0, y: 100 },
  { x: 100, y: 100 },
  { x: 200, y: 100 },
  { x: 300, y: 100 },
  { x: 0, y: 200 },
  { x: 100, y: 200 },
  { x: 200, y: 200 },
  { x: 300, y: 200 },
];
const initialState = {
  score: 0,
  time: 120,
  gameOver: false,
  gameStarted: false,
  holePositions: initialHolePositions,
};
export type GameState = {
  score: number;
  time: number;
  gameOver: boolean;
  gameStarted: boolean;
  holePositions: Position[];
};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, score: action.payload };
    case SET_TIME:
      return { ...state, time: action.payload };
    case SET_GAME_OVER:
      return { ...state, gameOver: action.payload };
    case SET_GAME_STARTED:
      return { ...state, gameStarted: action.payload };
    case SET_HOLE_POSITIONS:
      return { ...state, holePositions: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
