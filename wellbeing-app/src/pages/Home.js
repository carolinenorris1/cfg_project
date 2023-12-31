import React from "react";
import "../css/globalStyles.css";

function Home({ setSelectedPage }) {
  return (
    <div>
      <img
        src="images/home-images/hero.jpg"
        alt="Photograph of woman sitting on a bench outside, working on a laptop."
        className={"hero-image"}
      ></img>

      <div className={"slogan"}>
        <p>Time to UnHook</p>
      </div>
      <div className={"main-page-txt-container"}>
        <div className={"main-page-left-container"}>
          <p>
            We see you. <i>Tip tapping</i> on that keyboard all day. Peering
            into the abyss. We both know that all that screen time isn't good
            for you: eye strain, neck pain, Carpal tunnel... What if we could
            take it all away?
          </p>
          <button onClick={() => setSelectedPage("wellnessApp")}>
            Check it out 👉
          </button>
        </div>
        <div className={"main-page-right-container"}>
          <p className={"mission"}>Our Mission</p>
          <ul>
            <li>
              To remind you when to give yourself, and your eyes, a little break
              (because we know you forget)
            </li>
            <li>To stop working from home being so painful (literally) </li>
            <li>
              To help you be the healthiest & most productive version of
              yourself
            </li>
            <li>To smile at strangers (because it's nice)</li>
          </ul>
          <button onClick={() => setSelectedPage("wellbeing")}>
            Let us help 👉
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
