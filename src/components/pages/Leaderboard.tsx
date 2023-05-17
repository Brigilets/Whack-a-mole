import { useEffect, useState } from "react";
import { Game } from "../../lib/gameTypes";

const Leaderboard = () => {
  const [games, setGames] = useState<Game[]>([]);
  console.log(games);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {games &&
        games.map((game) => (
          <p key={game.id}>
            {game.player}: {game.score}
          </p>
        ))}
    </div>
  );
};

export default Leaderboard;
