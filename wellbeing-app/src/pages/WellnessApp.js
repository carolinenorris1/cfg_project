import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import eyeAnimation from "../assets/eye-animation.mp4";
import windchimesSound from "../assets/windchimes.mp3";

function Demo() {
    
    const [key, setKey] = useState(0);
    const [runTimeInMinutes, setRunTimeInMinutes] = useState(20);
    const [breakTimeInSeconds, setBreakTimeInSeconds] = useState(20);
    const [isPlaying, setIsPlaying] = useState(false);
    
    console.log(runTimeInMinutes, breakTimeInSeconds, isPlaying);

    const handleReset = (event) => {
        setRunTimeInMinutes(20);
        setBreakTimeInSeconds(20);
        setKey(prevKey => prevKey + 1);
        setIsPlaying(false);
    }

    const renderTime = ({ remainingTime }) => {
    function playSoundEffect() {
        new Audio(windchimesSound).play()
    }

    if (remainingTime === 0) {
        playSoundEffect();
        return <div className="timer">
                    <p>Look at something far away!</p>
                </div>;
    }

    return (
        <div className="timer">
            <video controls autoPlay loop muted width="100px">
                <source src={eyeAnimation} type="video/mp4"></source>
            </video>
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
            <div className="timer-settings">
                <p>Set timer here:</p>
                <label htmlFor="run-time">Run time (minutes)</label>
                <input value={runTimeInMinutes} onChange={event => setRunTimeInMinutes(event.target.value)} name="run-time" type="number" required></input>
                <label htmlFor="break-time">Break time (seconds)</label>
                <input value={breakTimeInSeconds} onChange={event => setBreakTimeInSeconds(event.target.value)} name="break-time" type="number" required></input>
            </div>
            <button type="submit" onClick={event => setIsPlaying(true)}>Start timer</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
console.log(CountdownCircleTimer.props)
export default Demo;
