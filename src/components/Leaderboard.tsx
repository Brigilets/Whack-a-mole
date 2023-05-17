import { useEffect, useState } from "react";
import { Game } from "../lib/gameTypes";

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
    <div style={{ color: "blue" }}>
      {top10games.map((game) => (
        <p key={game.id}>
          {game.player}: {game.score}
        </p>
      ))}
    </div>
  );
};

export default Leaderboard;
