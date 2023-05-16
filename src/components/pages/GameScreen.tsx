import { useState } from "react";

const GameScreen = () => {
  const [score, setScore] = useState<number>(0);
  const handleHoleClick = () => {
    return score;
  };
  const handleMoleClick = () => {
    setScore(score + 1);
  };
  return (
    <>
      <section>
        Score : <span>{score}</span>
      </section>
      <section>Time Left: time </section>
      <section>
        <img
          src="../../assets/WAM_Hole.png"
          alt="hole"
          onClick={handleHoleClick}
          className="hole"
        />
        <img
          src="../../assets/WAM_Mole.png"
          alt="hole"
          onClick={handleMoleClick}
          className="mole"
        />
      </section>
    </>
  );
};

export default GameScreen;
