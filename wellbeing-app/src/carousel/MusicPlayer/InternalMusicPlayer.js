import { useEffect, useState } from "react";
import InternalPlayer from './InternalPlayer';

function InternalMusicPlayer() {
  const [songs] = useState ([
  {
    title: "A Promise",
    artist: "Machine Gun Kelly",
    img_src: "./images/song-1.jpeg",
    src: "./music/a-promise.mp3"
  },
  {
    title: "Cat's Cradle",
    artist: "Artist 2",
    img_src: "./images/song-4.jpeg",
    src: "./music/Cats-Cradle.mp3"
  },
  { 
    title: "Memories of Spring",
    artist: "Artist 3",
    img_src: "./images/song-3.jpeg",
    src: "./music/Memories-of-Spring.mp3"
  },
  { 
    title: "Midnight Stroll",
    artist: "Artist 4",
    img_src: "./images/song-5.jpeg",
    src: "./music/Midnight-Stroll-Lofi-Study-Music.mp3"
  },
  { 
    title: "Otjanbird Pt II",
    artist: "Artist 4",
    img_src: "./images/song-6.jpeg",
    src: "./music/Otjanbird-Pt.-II.mp3"
  },
  {
    title: "Sunset Landscape",
    artist: "Artist 4",
    img_src: "./images/song-2.jpeg",
    src: "./music/Sunset-Landscape.mp3"
  }
]);

const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex +1);

useEffect(() => {
  setNextSongIndex(() =>{
    if(currentSongIndex + 1 > songs.length -1 ){
      return 0 ;
    } else{
      return currentSongIndex +1;
    }
  });
},[currentSongIndex]);
  

  return (
    <div className="App">
      <InternalPlayer 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs= {songs}
      />
    </div>
  );
}

export default InternalMusicPlayer;

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
