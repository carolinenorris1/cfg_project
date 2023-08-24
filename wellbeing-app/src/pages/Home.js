import "../css/globalStyles.css";

function Home() {
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
        {/* <div className = {"eye-thumbnail"}>
      <img src = "images\home-images\Eye-timer.png"></img>
      </div> */}
        <div className={"main-page-left-container"}>
          <p>
            We see you. <i>Tip tapping</i> on that keyboard all day. <br></br>
            Peering into the abyss.<br></br> We both know that all that screen
            time isn't good for you: eye strain, neck pain, Carpal tunnel...
            <br></br>What if we could take it all away?
          </p>
          <button>Check it out 👉</button>
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
          <button>Let us help 👉</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
