import { Position } from "../../lib/gameTypes";

export const setScore = (score: number) => {
  return {
    type: "SET_SCORE",
    payload: score,
  };
};

export const setTime = (time: number) => {
  return {
    type: "SET_TIME",
    payload: time,
  };
};

export const setGameOver = (gameOver: boolean) => {
  return {
    type: "SET_GAME_OVER",
    payload: gameOver,
  };
};

export const setGameStarted = (gameStarted: boolean) => {
  return {
    type: "SET_GAME_STARTED",
    payload: gameStarted,
  };
};

export const setHolePositions = (holePositions: Position[]) => {
  return {
    type: "SET_HOLE_POSITIONS",
    payload: holePositions,
  };
};
