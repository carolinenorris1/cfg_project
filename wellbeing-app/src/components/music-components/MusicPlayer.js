import { useEffect, useState } from "react";
import Player from './Player';


function MusicPlayer() {
  const [songs] = useState ([
  {
    title: "Forget me too ft. Halsey",
    artist: "Machine Gun Kelly",
    img_src: "./images/song-1.jpg",
    src: "./music/on-n-on.mp3"
  },
  {
    title: "Song 22",
    artist: "Artist 2",
    img_src: "./images/song-2.jpg",
    src: "./music/somebody-new.mp3"
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    img_src: "./images/song-3.jpg",
    src: "./music/on-n-on.mp3"
  },
  {
    title: "Song 4",
    artist: "Artist 4",
    img_src: "./images/song-4.jpg",
    src: "./music/somebody-new.mp3"
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
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs= {songs}
      />
    </div>
  );
}

export default MusicPlayer;

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
