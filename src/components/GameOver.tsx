import { FC } from "react";
import { NavLink } from "react-router-dom";

type GameOverProps = {
  score: number;
  className: string;
};

const GameOver: FC<GameOverProps> = ({ score, className }) => {
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
        >
          X
        </NavLink>
      </section>
      <span>{score}</span>
    </div>
  );
};

export default GameOver;
