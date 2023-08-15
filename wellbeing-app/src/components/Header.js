import React from "react";
import styles from "../globalStyles.module.css";

function Header({ setSelectedPage }) {
  return (
    <div className={styles["header-container"]}>
      <div>
        Logo
        {/* logo - image */}
      </div>
      <div className={styles["header-menu"]}>
        <button onClick={() => setSelectedPage("home")}>Home</button>
        <button onClick={() => setSelectedPage("wellnessApp")}>
          WellnessApp
        </button>
        <button onClick={() => setSelectedPage("wellbeing")}>Wellbeing</button>
        <button onClick={() => setSelectedPage("community")}>Community</button>
      </div>
      <div>{/* image for user */}</div>
    </div>
  );
}

export default Header;
