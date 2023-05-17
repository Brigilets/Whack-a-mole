import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
//pages
import Home from "./components/pages/Home";
import GameScreen from "./components/pages/no-redux-game-page/GameScreen";
import GameScreenRedux from "./components/pages/GameScreenRedux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="game" element={<GameScreenRedux />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
