import { useEffect, useState } from "react";
import { Game } from "../lib/gameTypes";
import styles from "./Leaderboard.module.css";

const Leaderboard = () => {
  const [top10games, setTop10Games] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        const allGames = data.games;
        const sortedGames = allGames
          .sort(
            (a: { score: string }, b: { score: string }) =>
              parseInt(b.score) - parseInt(a.score)
          )
          .slice(0, 10);
        setTop10Games(sortedGames);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <h1>Leader board</h1>
      <ol>
        {top10games.map((game) => (
          <li key={game.id}>
            {game.player} : {game.score}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
