import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InternalMusicPlayer from "../carousel/MusicPlayer/InternalMusicPlayer";
import Quotes from "../carousel/Quotes/Quotes";
import Timer from "../carousel/Timer/Timer";

function WellnessApp() {
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
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EIhnGUyOEDCHI?utm_source=generator"
            width="100%"
            height="675"
            frameBorder="0"
            allowFullScreen=""
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
          <Quotes />
        </div>
        <div>
          <h3>LOCKED CONTENT 2</h3>
          {/* Add content for static component 6 */}
        </div>
      </Carousel>
    </div>
  );
}

export default WellnessApp;
