import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setScore,
  setTime,
  setGameOver,
  setGameStarted,
  setHolePositions,
} from "../redux/actions/gameActions";
import { initialHolePositions } from "../redux/reducers/gameReducer";

type GameOverProps = {
  score: number;
  className: string;
};

const GameOver: FC<GameOverProps> = ({ score, className }) => {
  const dispatch = useDispatch();

  const handleResetGame = () => {
    dispatch(setScore(0));
    dispatch(setTime(120));
    dispatch(setGameOver(false));
    dispatch(setGameStarted(false));
    dispatch(setHolePositions(initialHolePositions));
  };

  return (
    <div className={className}>
      <section>
        <h3>Game over</h3>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 900,
            fontSize: "1.4em",
          }}
          onClick={handleResetGame}
        >
          X
        </NavLink>
      </section>
      <span>{score}</span>
    </div>
  );
};

export default GameOver;
