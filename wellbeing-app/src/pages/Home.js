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
        <h1>Time to UnHook</h1>
      </div>
      <div className={"main-page-txt-container"}>
        <div className={"main-page-left-container"}>
          <p>
            We see you. Tip tapping on that keyboard all day. Peering into the
            abyss. We both know that all that screen time isn't good for you.
            Eye strain, Neck pain, Carpal tunnel, What if we could take it all
            away?
          </p>
          {/* <img>This will need to be a screenshot of the eye timer app when finished</img> */}
          <button>Check it out 👉</button>
        </div>
        <div className={"main-page-right-container"}>
          <h1>Our Mission</h1>

          <ul>
            <li>
              to remind you when to give yourself, and your eyes, a little break
              (because we know you forget)
            </li>
            <li>to stop working from home being so painful (literally) </li>
            <li>
              to help you be the healthiest & most productive version of
              yourself
            </li>
            <li>to smile at strangers (because it's nice)</li>
          </ul>
          <button>Let us help 👉</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
