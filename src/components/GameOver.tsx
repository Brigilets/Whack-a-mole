import { ChangeEvent, FC } from "react";

type GameOverProps = {
  score: number;
};

const GameOver: FC<GameOverProps> = ({ score }) => {
  //   const handleClose = useCallback(() => {});
  return (
    <>
      <h2>Game over</h2>
      <span>{score}</span>
      <button></button>
    </>
  );
};

export default GameOver;
