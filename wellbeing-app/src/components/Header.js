import React from "react";
import "../css/globalStyles.css";

function Header({ setSelectedPage }) {
  return (
    <div className={"header-container"}>
      <div className={"logo"}>
        {/* <h1>LOGO</h1> */}
        <img src = "images\logo\logo2.png"></img>
        {/* place for the logo - image */}
      </div>

      <div className={"header-menu"}>
        <div></div>
        <button onClick={() => setSelectedPage("home")}>Home</button>
        <button onClick={() => setSelectedPage("wellnessApp")}>
          WellnessApp
        </button>
        <button onClick={() => setSelectedPage("wellbeing")}>Wellbeing</button>
        <button onClick={() => setSelectedPage("community")}>Community</button>
      </div>
      <div className={"user-icon-container"}>
        <img
          src="images\home-images\vectoruser-icon.png"
          className={"user-icon"}
        ></img>
      </div>
    </div>
  );
}

export default Header;
