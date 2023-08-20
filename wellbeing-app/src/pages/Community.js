// import styles from "../globalStyles.module.css";

function Community() {
  return (
    <div>
      <div>
        <h1>Join our community</h1>
      </div>
      {/* left side of the screen */}
      <div>
        {/* FAQ will go here, Katharine will write them */}
        <h2>FAQ</h2>
        <p>Question 1</p>
        <p>Question 2</p>
        <p>Question 3</p>
        <p>Question 4</p>
      </div>
      <div>
        <h2>Testimonials</h2>
        <p>"This app changed my life. I've been working from home since Covid and am on my computer all day. I'd been getting eye strain, and had read about the 20x20x20 rule, but would always get so absorbed in my work that I'd forget to look away from the screen. Then someone told me about UnHook. The gentle reminders are all I need, and it's fantastic just to be able to relax & focus on my work without having to worry about ruining my eyes. I recommend you to everyone!"</p>
        <p>"After moving to hybrid working I was beginning to get back ache from sitting hunched over my laptop all day. This app has been so helpful with reminders and great advice about how to set up my working environment- Katharine"</p>
        <p>A testimonial from each of us - Mariam</p>
        <p>"It's easy to get carried away when you are working away on a computer, the app really helped me take care of myself and set timers for when I was likely to forget. The inbuilt features mean I don't have to have a ton on tabs open. All in all, a very useful app that helps me declutter and stay focused."</p>
        <p>A testimonial from each of us - Aneta</p>
        <p>A testimonial from each of us - Caroline</p>
        <p>A testimonial from each of us - Roinee</p>
      </div>
      <div>
        {/* right side of the screen */}
        {/* 3 images are for 3 icons with link to Facebook, Twitter and Instagram */}
        <img src = "images\community-images\Vectorfacebook.png"></img>
        <img src = "images\community-images\Vectortwitter.png"></img>
        <img src = "images\community-images\Vectorinstagram.png"></img>
      </div>
      <div>
        {/*Community div, images for a few images of people in a cafe etc. and a few lines of description*/}
        <img src = "images\community-images\festival-1.jpg"></img>
        <img src = "images\community-images\map.png"></img>
        <img src = "images\community-images\meal-2.jpg"></img>
        <p>Description for the community - Katharine</p>
      </div>
      <div>
        {/* Icons for downloading stuff like Apple store and Google Play */}
        <img src = "images\community-images\Vectorplay-store.png"></img>
        <img src = "images\community-images\Vectorapple.png"></img>
      </div>
      <div>
        <button>Convinced?</button>
        <p>Sign up, become a member</p>
        <p>
          Or <b>login</b> here 👉
        </p>
      </div>
    </div>
  );
}
export default Community;
