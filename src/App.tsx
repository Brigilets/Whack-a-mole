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
import GameScreen from "./components/pages/GameScreen";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" /*element={RootLayout} */>
      <Route index element={<Home />} />
      <Route path="game" element={<GameScreen />} />
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
