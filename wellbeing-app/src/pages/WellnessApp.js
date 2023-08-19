import styles from "../globalStyles.module.css";
import MusicPlayer from "../MusicPlayer";
import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import eyeAnimationSideToSide from "../assets/eye-animation-side-to-side.gif";
import eyeAnimationLookingUp from "../assets/eye-animation-looking-up.gif";
import windchimesSound from "../assets/windchimes.mp3";
import cheeringCrowdSound from "../assets/cheering-crowd.mp3";


function Demo() {
    
    const [key, setKey] = useState(0);
    const [runTimeInMinutes, setRunTimeInMinutes] = useState(20);
    const [breakTimeInSeconds, setBreakTimeInSeconds] = useState(20);
    const [alarmSound, setAlarmSound] = useState(windchimesSound);
    const [isPlaying, setIsPlaying] = useState(false);
    
    console.log(runTimeInMinutes, breakTimeInSeconds, alarmSound, isPlaying);

    const onChangeValue = (event) => {
      setAlarmSound(event.target.value);
      console.log(event.target.value);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setIsPlaying(true);
    }

    const handleReset = (event) => {
      event.preventDefault();
      setRunTimeInMinutes(20);
      setBreakTimeInSeconds(20);
      setKey(prevKey => prevKey + 1);
      setAlarmSound(windchimesSound);
      setIsPlaying(false);
    }

    const renderTime = ({ remainingTime }) => {
    function playSoundEffect() {
      console.log(alarmSound);
        new Audio(alarmSound).play()
    }

    if (remainingTime === 0) {
        playSoundEffect();
        return <div className="timer">
                  <img src={eyeAnimationLookingUp} alt="pair of eyes looking up"></img>
                  <p>Look at something far away!</p>
                </div>;
    }

    return (
        <div className="timer">
          <img src={eyeAnimationSideToSide} alt="pair of eyes looking side to side"></img>
        </div>
    );
};

    return (

        <div className="App">
            <h1>Set screen break reminders</h1>
            <h4>Take frequent breaks from your screen. Your eyes can become tired when you use them for long periods.
                Taking frequent breaks from the screen can help to avoid tired eyes and headaches.</h4>
            <h4>The 20, 20, 20 rule suggests taking a break of at least 20 seconds, every 20 minutes and to look at least 20 feet away.</h4>
            <p>insert YouTube video link here</p>
            <div className="timer-wrapper">
                <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={runTimeInMinutes * 60}
                key={key}
                size={350}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => [true, {breakTimeInSeconds}]}
                >       
                {renderTime}
                </CountdownCircleTimer>
            </div>
            <form>
                <p>Set timer here:</p>
                <label htmlFor="run-time">Run time (minutes)</label>
                <input value={runTimeInMinutes} onChange={event => setRunTimeInMinutes(event.target.value)} name="run-time" type="number" required></input>
                <label htmlFor="break-time">Break time (seconds)</label>
                <input value={breakTimeInSeconds} onChange={event => setBreakTimeInSeconds(event.target.value)} name="break-time" type="number" required></input>
                <label>
                Choose your alarm sound:
                <select value={alarmSound} onChange={onChangeValue}>
                  <option value={windchimesSound}>Wind chimes</option>
                  <option value={cheeringCrowdSound}>Cheering crowd</option>
                </select>
                </label>
                <button type="submit" onClick={handleSubmit}>Start timer</button>
                <button onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
}
console.log(CountdownCircleTimer.props)
export default Demo;
