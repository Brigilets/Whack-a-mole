import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

import "../../App.css";
import Leaderboard from "../Leaderboard";

const Home = () => {
  return (
    <div className={styles.main}>
      <h1>Ready for some moles?</h1>
      {/* <Leaderboard /> */}
      <NavLink to="game" className="startGame">
        Get smashing!!!
      </NavLink>
    </div>
  );
};
export default Home;
