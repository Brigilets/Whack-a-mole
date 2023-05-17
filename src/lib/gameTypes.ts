export type User = {
  name: string;
  scores: number[];
};

export type Game = {
  id: string;
  player: string;
  score: number;
};

export type Position = {
  x: number;
  y: number;
};