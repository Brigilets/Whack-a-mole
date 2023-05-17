import { combineReducers } from "redux";
import gameReducer, { GameState } from "./gameReducer";
// Import other reducers if you have them

// Define the shape of the root state by combining individual reducer states
export interface RootState {
  game: GameState;
  // Add other state properties if you have them
}

// Combine the individual reducers into a root reducer
const rootReducer = combineReducers<RootState>({
  game: gameReducer,
  // Add other reducers if you have them
});

export default rootReducer;
