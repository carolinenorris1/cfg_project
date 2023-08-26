import React, { useContext } from "react";
import "../css/globalStyles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CountryContext from "../context/CountryContext";
import InternalMusicPlayer from "../carousel/MusicPlayer/InternalMusicPlayer";
import Quotes from "../carousel/Quotes/Quotes";
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
      <div className={"carousel-container"}>
        {/* Dynamic Carousel */}
        <Carousel infiniteLoop={true}>
          {/* Slide 1 - Music Player */}
          <div className={"music-player"}>
            <h1>Music Player</h1>
            <InternalMusicPlayer />
          </div>
          {/* Slide 2 - Spotify Player */}
          <div>
            <h1>Spotify Player</h1>
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
            <h1>YouTube Video</h1>
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
          <div className={"timer"}>
            <h1>Timer</h1>
            <Timer />
          </div>
          {/* Slide 5 (Static) */}
          <div className="quote">
            <h1>Quote of the day</h1>
            <div>
              <p>Looking for some inspiration?</p>
              <p>Daily quotes, here when you need them.</p>
              <Quotes />
            </div>
          </div>
          <div className="premium">
            <h1>Premium Content</h1>
            <div>
              <p>Want to discover even more great features?</p>
              <p>
                For just <b>{getPremiumPrice(country)}</b>, you can unlock even
                more tools to help you <b>UnHook</b>.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default WellnessApp;
