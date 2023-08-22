import React from "react";
import styles from "../css/globalStyles.css";

function MainSection({ children }) {
  return <div className={styles["main-section"]}>{children}</div>;
}

export default MainSection;
