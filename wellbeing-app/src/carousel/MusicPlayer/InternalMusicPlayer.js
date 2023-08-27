import { useEffect, useState } from "react";
import InternalPlayer from "./InternalPlayer";

function InternalMusicPlayer() {
  const [songs] = useState([
    {
      title: "A Promise",
      artist: "Keys of Moon",
      img_src: "./images/music-player-images/song-1.jpeg",
      src: "./music/a-promise.mp3",
    },
    {
      title: "Cat's Cradle",
      artist: "Purrple Cat",
      img_src: "./images/music-player-images/song-4.jpeg",
      src: "./music/Cats-Cradle.mp3",
    },
    {
      title: "Memories of Spring",
      artist: "Tokyo Music Walker",
      img_src: "./images/music-player-images/song-3.jpeg",
      src: "./music/Memories-of-Spring.mp3",
    },
    {
      title: "Midnight Stroll",
      artist: "Ghostrifter Official",
      img_src: "./images/music-player-images/song-5.jpeg",
      src: "./music/Midnight-Stroll-Lofi-Study-Music.mp3",
    },
    {
      title: "Otjanbird Pt II",
      artist: "Spheriá",
      img_src: "./images/music-player-images/song-6.jpeg",
      src: "./music/Otjanbird-Pt.-II.mp3",
    },
    {
      title: "Sunset Landscape",
      artist: "Keys of Moon",
      img_src: "./images/music-player-images/song-2.jpeg",
      src: "./music/Sunset-Landscape.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <InternalPlayer
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default InternalMusicPlayer;
