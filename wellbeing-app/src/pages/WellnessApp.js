import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CountryContext from "../context/CountryContext";
import InternalMusicPlayer from "../carousel/MusicPlayer/InternalMusicPlayer";
import Timer from "../carousel/Timer/Timer";

function WellnessApp() {
  const context = useContext(CountryContext);
  const country = context.country;

  function getPremiumPrice(country) {
    let premiumPrice;

    if (country === "UK") {
      premiumPrice = "£2.99/month";
    } else if (country === "US") {
      premiumPrice = "$4.99/month";
    } else if (country === "EU") {
      premiumPrice = "€3.99/month";
    } else {
      premiumPrice = "*no region selected*";
    }
    return premiumPrice;
  }

  return (
    <div>
      <h1>WellnessApp content</h1>

      {/* Dynamic Carousel */}
      <Carousel infiniteLoop={true}>
        {/* Slide 1 - Music Player */}
        <div>
          <h2>Music Player</h2>
          <InternalMusicPlayer />
        </div>
        {/* Slide 2 - Spotify Player */}
        <div>
          <h3>Spotify Player</h3>
          <iframe
            //style="border-radius:12px"
            src="https://open.spotify.com/embed/playlist/5qQBuK3Q0iYlGmrjJCy6Ri?utm_source=generator"
            width="100%"
            height="675"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        {/* Slide 3 - YouTube Video */}
        <div>
          <h3>YouTube Video</h3>
          <iframe
            width="500"
            height="675"
            src="https://www.youtube.com/embed/hzUStg_pGBE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* Slide 4 - Timer */}
        <div>
          <h4>Timer</h4>
          <Timer />
        </div>
        {/* Slide 5 (Static) */}
        <div>
          <h2>Looking for some inspiration?</h2>
          <h4>Daily quotes, here when you need them.</h4>
        </div>
        <div>
          <h3>Premium Content</h3>
          <p>Want to discover even more great features?</p>
          <p>
            For just {getPremiumPrice(country)}, you can unlock even more tools
            to help you UnHook.
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default WellnessApp;
