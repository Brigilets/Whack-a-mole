import { useCallback, useEffect, useState } from "react";
import styles from "./GameScreen.module.css";
import GameOver from "../GameOver";
import "../../App.css";

type Position = {
  x: number;
  y: number;
};

const GameScreen = () => {
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(120);

  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const [holePositions, setHolePositions] = useState<Position[]>([
    { x: 0, y: 0 }, // Mole
    { x: 100, y: 0 },
    { x: 200, y: 0 },
    { x: 300, y: 0 },
    { x: 0, y: 100 },
    { x: 100, y: 100 },
    { x: 200, y: 100 },
    { x: 300, y: 100 },
    { x: 0, y: 200 },
    { x: 100, y: 200 },
    { x: 200, y: 200 },
    { x: 300, y: 200 },
  ]);

  const handleHoleClick = () => {
    return score;
  };

  const handleMoleClick = useCallback(() => {
    if (gameStarted && !gameOver) {
      setScore(score + 1);
    }
  }, [gameOver, gameStarted, score]);

  useEffect(() => {
    if (time === 0) {
      setGameOver(true);
    }
  }, [time]);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  //Handle Timer

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const moleInterval = setInterval(() => {
        setHolePositions((prevPositions) => {
          const updatedPositions = [...prevPositions];

          const moleIndex = updatedPositions.findIndex(
            (position) => position.x === 0 && position.y === 0
          );

          const randomIndex = Math.floor(Math.random() * prevPositions.length);

          if (moleIndex !== -1) {
            const temp = updatedPositions[moleIndex];
            updatedPositions[moleIndex] = updatedPositions[randomIndex];
            updatedPositions[randomIndex] = temp;
          }

          return updatedPositions;
        });
      }, 1000);

      setTimeout(() => {
        clearInterval(moleInterval);
        setGameOver(true);
      }, 120000);

      return () => {
        clearInterval(moleInterval);
      };
    }
  }, [gameStarted, gameOver]);
  return (
    <div className={styles.main}>
      <section className={styles.infoPanel}>
        <span>Score :{score}</span>
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
        {holePositions.map((position, index) => (
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
            className={position.x === 0 && position.y === 0 ? "mole" : "hole"}
            style={{ left: position.x, top: position.y }}
          />
        ))}
      </section>
    </div>
  );
};

export default GameScreen;
