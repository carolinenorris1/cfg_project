import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import eyeAnimationSideToSide from "./timer-animations/eye-animation-side-to-side.gif";
import eyeAnimationLookingUp from "./timer-animations/eye-animation-looking-up.gif";
import birdSound from "./timer-sounds/birds-singing-trimmed.mp3";
import cheeringCrowdSound from "./timer-sounds/crowd-cheer-trimmed.mp3";
import alarmClockSound from "./timer-sounds/mechanical-alarm-clock-trimmed.mp3";
import pianoSound from "./timer-sounds/the-last-piano-trimmed.mp3";
import motivationalMusicSound from "./timer-sounds/motivational-trimmed.mp3";
import soothingMusicSound from "./timer-sounds/cottagecore-trimmed.mp3";

function EyeTimer() {
  const [key, setKey] = useState(0);
  const [runTimeInMinutes, setRunTimeInMinutes] = useState(20);
  const [breakTimeInSeconds, setBreakTimeInSeconds] = useState(20);
  const [alarmSound, setAlarmSound] = useState(alarmClockSound);
  const [isPlaying, setIsPlaying] = useState(false);

  console.log(runTimeInMinutes, breakTimeInSeconds, alarmSound, isPlaying);

  const onChangeValue = (event) => {
    setAlarmSound(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPlaying(true);

    console.log(CountdownCircleTimer.props);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setRunTimeInMinutes(20);
    setBreakTimeInSeconds(20);
    setKey((prevKey) => prevKey + 1);
    setAlarmSound(alarmClockSound);
    setIsPlaying(false);
  };

  const renderTime = ({ remainingTime }) => {
    console.log(remainingTime);
    function playSoundEffect() {
      console.log(alarmSound);
      new Audio(alarmSound).play();
    }

    if (remainingTime === 0 && isPlaying) {
      playSoundEffect();
      return (
        <div className="timer">
          <img src={eyeAnimationLookingUp} alt="pair of eyes looking up"></img>
          <p>Look at something far away!</p>
        </div>
      );
    }

    return (
      <div className="timer">
        <img
          src={eyeAnimationSideToSide}
          alt="pair of eyes looking side to side"
        ></img>
      </div>
    );
  };

  return (
    <div className="timer">
      <div className={"timer-instructions"}>
        <h4>Set screen break reminders</h4>
        <p>
          Take frequent breaks from your screen. Your eyes can become tired when
          you use them for long periods. Taking frequent breaks from the screen
          can help to avoid tired eyes and headaches.
          <p>
            The 20, 20, 20 rule suggests taking a break of at least 20 seconds,
            every 20 minutes and to look at least 20 feet away.
          </p>
        </p>
      </div>

      {/* <p>insert YouTube video link here</p> */}
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={runTimeInMinutes * 60}
          key={key}
          size={350}
          colors={["#8a5a7e", "#F7B801", "#A30000", "#A30000"]}
          //   colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: breakTimeInSeconds })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className={"timer-setting"}>
        <form>
          <p>
            <b>Set timer here:</b>
          </p>
          <label htmlFor="run_time">Run time (minutes)</label>
          <input
            value={runTimeInMinutes}
            onChange={(event) => setRunTimeInMinutes(event.target.value)}
            name="run_time"
            type="number"
            required
          ></input>
          <label htmlFor="break_time">Break time (seconds)</label>
          <input
            value={breakTimeInSeconds}
            onChange={(event) => setBreakTimeInSeconds(event.target.value)}
            name="break_time"
            type="number"
            required
          ></input>
          <label>
            Choose your alarm sound:
            <select value={alarmSound} onChange={onChangeValue}>
              <option value={alarmClockSound}>Alarm clock</option>
              <option value={birdSound}>Bird song</option>
              <option value={cheeringCrowdSound}>Cheering crowd</option>
              <option value={motivationalMusicSound}>Motivational music</option>
              <option value={pianoSound}>Piano playing</option>
              <option value={soothingMusicSound}>Soothing music</option>
            </select>
          </label>
          <button type="submit" onClick={handleSubmit}>
            Start timer
          </button>
          <button onClick={handleReset}>Reset</button>
        </form>
      </div>
    </div>
  );
}

export default EyeTimer;
