import React from "react";
import styles from "../globalStyles.module.css";

function Header({ setSelectedPage }) {
  return (
    <div className={styles["header-container"]}>
      <div>Logo</div>
      <div className={styles["header-menu"]}>
        <button onClick={() => setSelectedPage("home")}>Home</button>
        <button onClick={() => setSelectedPage("wellnessApp")}>
          WellnessApp
        </button>
        <button onClick={() => setSelectedPage("wellbeing")}>Wellbeing</button>
        <button onClick={() => setSelectedPage("demo")}>Demo</button>
        <button onClick={() => setSelectedPage("community")}>Community</button>
      </div>
    </div>
  );
}

export default Header;
