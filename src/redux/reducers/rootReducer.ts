import { combineReducers } from "redux";
import gameReducer, { GameState } from "./gameReducer";

export interface RootState {
  game: GameState;
}

const rootReducer = combineReducers<RootState>({
  game: gameReducer,

});

export default rootReducer;
