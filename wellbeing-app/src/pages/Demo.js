import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import eyeAnimation from "../assets/eye-animation.mp4";
import windchimesSound from "../assets/windchimes.mp3";

function Demo() {

    const [key, setKey] = useState(0);
    const [time, setTime] = useState(60);
    const [isPlaying, setIsPlaying] = useState(false);

    const renderTime = ({ remainingTime }) => {
        function playSoundEffect() {
            new Audio(windchimesSound).play()
        }

        if (remainingTime === 0) {
            setIsPlaying(false);
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
            <div className="timer-wrapper">
                <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={time}
                key={key}
                size={350}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => ({ shouldRepeat: true, delay: 20})}
                >
                {renderTime}
                </CountdownCircleTimer>
            </div>
            <label htmlFor="timer">Enter time (seconds)</label>
            <input value={time} onChange={event => setTime(event.target.value)} name="timer" type="number" required></input>
            <button onClick={() => setIsPlaying(true)}>Start</button>
            <button onClick={() => setKey(prevKey => prevKey + 1)}>Reset</button>
        </div>
    );
}

export default Demo;
