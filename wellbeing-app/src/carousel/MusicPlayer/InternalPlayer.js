import React, { useState, useRef, useEffect } from 'react';
import InternalPlayerDetails from './InternalPlayerDetails';
import InternalPlayerControls from './InternalPlayerControls';

function InternalPlayer(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex((prevIndex) =>
        (prevIndex + 1) % props.songs.length
      );
    } else {
      props.setCurrentSongIndex((prevIndex) =>
        (prevIndex - 1 + props.songs.length) % props.songs.length
      );
    }
  };

  return (
    <div className="c-player">
      <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
      <div className="player-center"> {/* Wrap content in a centered container */}
        <InternalPlayerDetails song={props.songs[props.currentSongIndex]} />
        <InternalPlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />
        <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
      </div>
    </div>
  );
}

export default InternalPlayer;