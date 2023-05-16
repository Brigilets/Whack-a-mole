export type User = {
  name: string;
  scores: number[];
};

export type Game = {
  id: string;
  player: string;
  score: number;
};

export type storeState = {
  time: number;
  score: number;
  activeID: number;
  gameOn: boolean;
  db_scores: never[];
  showModal: boolean;
  user: {};
  showPopUp: boolean;
};
