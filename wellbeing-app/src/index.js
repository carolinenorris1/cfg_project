import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styles from "./css/globalStyles.css";
import "./carousel/MusicPlayer/InternalMusicPlayer-index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
//a function for always setting the size of the page according to the browser's window
const appSize = () => {
  const doc = document.documentElement;
  doc.style.setProperty(" — app-height", `${window.innerHeight}px`);
  doc.style.setProperty(" — app-width", `${window.innerWidth}px`);
};
window.addEventListener("resize", appSize);
appSize();

root.render(
  <React.StrictMode>{<App className={styles["main-page"]} />}</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
