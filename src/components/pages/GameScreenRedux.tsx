import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store";
import {
  setScore,
  setTime,
  setGameOver,
  setGameStarted,
  setHolePositions,
} from "../../redux/actions/gameActions";
import styles from "./GameScreen.module.css";
import GameOver from "../GameOver";
import { RootState } from "../../redux/reducers/rootReducer";

type Position = {
  x: number;
  y: number;
};

const GameScreenRedux = () => {
  const dispatch = useDispatch();
  const { score, time, gameOver, gameStarted, holePositions } = useSelector(
    (state: RootState) => state.game
  );

  const handleHoleClick = () => {
    dispatch(setScore(score));
  };

  const handleMoleClick = useCallback(() => {
    if (gameStarted && !gameOver) {
      dispatch(setScore(score + 1));
    }
  }, [dispatch, gameStarted, gameOver, score]);

  useEffect(() => {
    if (time === 0) {
      dispatch(setGameOver(true));
    }
  }, [dispatch, time]);

  const handleStartGame = () => {
    dispatch(setGameStarted(true));
  };

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        dispatch(setTime(time - 1));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [dispatch, gameStarted, time]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const moleInterval = setInterval(() => {
        const updatedPositions = [...holePositions];

        const moleIndex = updatedPositions.findIndex(
          (position) => position.x === 0 && position.y === 0
        );

        const randomIndex = Math.floor(Math.random() * updatedPositions.length);

        if (moleIndex !== -1) {
          const temp = updatedPositions[moleIndex];
          updatedPositions[moleIndex] = updatedPositions[randomIndex];
          updatedPositions[randomIndex] = temp;
        }

        dispatch(setHolePositions(updatedPositions));
      }, 1000);

      setTimeout(() => {
        clearInterval(moleInterval);
        dispatch(setGameOver(true));
      }, 120000);

      return () => {
        clearInterval(moleInterval);
      };
    }
  }, [dispatch, gameStarted, gameOver, holePositions]);

  return (
    <div className={styles.main}>
      <section className={styles.infoPanel}>
        <span>Score: {score}</span>
        {!gameStarted ? (
          <button onClick={handleStartGame} className={styles.startBtn}>
            Start
          </button>
        ) : null}
        {gameOver ? (
          <GameOver score={score} className={styles.gameOver} />
        ) : null}
        <span>Time Left: {time > 0 ? time : 0}</span>
      </section>
      <section className={styles.board}>
        {holePositions.map((position: Position, index: number) => (
          <img
            key={index}
            src={
              position.x === 0 && position.y === 0
                ? "./../assets/WAM_Mole.png"
                : "./../assets/WAM_Hole.png"
            }
            alt={position.x === 0 && position.y === 0 ? "mole" : "hole"}
            onClick={
              position.x === 0 && position.y === 0
                ? handleMoleClick
                : handleHoleClick
            }
            style={{ left: position.x, top: position.y }}
          />
        ))}
      </section>
    </div>
  );
};

export default GameScreenRedux;
