import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InternalMusicPlayer from "../carousel/MusicPlayer/InternalMusicPlayer";
import Quotes from "../carousel/Quotes/Quotes";
import SpotifyPlayer from "../carousel/SpotifyPlayer/SpotifyPlayer";
import Timer from "../carousel/Timer/Timer";
import YouTubeVideo from "../carousel/YouTubeVideo/YouTubeVideo";
import PremiumContent from "../carousel/PremiumContent/PremiumContent";

function WellnessApp() {
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
            <SpotifyPlayer />
          </div>
          {/* Slide 3 - YouTube Video */}
          <div>
            <h1>YouTube Video</h1>
            <YouTubeVideo />
          </div>
          {/* Slide 4 - Timer */}
          <div className={"timer"}>
            <h1>Timer</h1>
            <Timer />
          </div>
          {/* Slide 5 - Quotes */}
          <div className="quote">
            <h1>Quote of the day</h1>
            <div>
              <p>Looking for some inspiration?</p>
              <p>Daily quotes, here when you need them.</p>
              <Quotes />
            </div>
          </div>
          {/* Slide 6 - Premium Content */}
          <div className="premium">
            <h1>Premium Content</h1>
            <PremiumContent />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default WellnessApp;
