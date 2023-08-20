/* Text for Ruth to be written on this page:
- a tag line
- a few lines describing the app 
- bullet points with description of the app/hat we are trying to do
*/

// import styles from "../globalStyles.module.css";

function Home() {
  return (
    <div>
      <div>
        <img src = "images\home-images\vectoruser-icon.png"></img>
      </div>
      <div>
      <img src = "images\home-images\hero.jpg" 
      alt = "Photograph of woman sitting on a bench outside, working on a laptop."></img>
      </div>
      <div>
        <h1>Time to UnHook</h1>
      </div>
      <div>
        <h2>We see you. 
          Tip tapping on that keyboard all day. 
          Peering into the abyss.
          We both know that all that screen time isn't good for you.
          Eye strain,
          Neck pain,
          Carpal tunnel,
          What if we could take it all away?</h2>
        {/* <img>This will need to be a screenshot of the eye timer app when finished</img> */}
        <button>Check it out 👉</button>
      </div>
      <div>
        <h2>Our Mission</h2>
        <p>
          <ui>to remind you when to give yourself, and your eyes, a little break (because we know you forget)</ui>
          <ui>to stop working from home being so painful (literally) </ui>
          <ui>to help you be the healthiest & most productive version of yourself </ui>
          <ui>to smile at strangers (because it's nice)</ui>
        </p>
        <button>Let us help</button>
      </div>
    </div>
  );
}
export default Home;
