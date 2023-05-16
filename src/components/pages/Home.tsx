import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

import "../../App.css";
const Home = () => {
  return (
    <div className={styles.main}>
      <h1>Ready for some moles?</h1>
      <NavLink to="game">
        <button
          // className={styles.startGame}
          className="startGame"
          onClick={() => console.log("clicked")}
        >
          Get smashing!!!
        </button>
      </NavLink>
    </div>
  );
};
export default Home;
