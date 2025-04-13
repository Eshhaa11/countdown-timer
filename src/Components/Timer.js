import { useState, useEffect, use } from "react";
import './Timer.css';

function Timer ({ initialTime }) {
    const [time, setTime] = useState(initialTime)

    useEffect(() => {
        if ( time <= 0) return;

        const timer = setInterval(() => {
         setTime( t => t -1); 
        }, 1000);

     
         return () => clearInterval(timer);
         }, [time]);
    
         const format = (seconds) => {
            const hours = Math.floor(seconds / 3600);
            const mins = Math.floor(seconds % 3600 / 60); 
            const secs = seconds % 60;

            const h = hours < 10 ? '0' + hours : hours;
            const m = mins < 10 ? '0' + mins : mins;
            const s = secs < 10 ? '0' + secs : secs;
            return `${h}:${m}:${s}`;
         };


    return (
        <div className="timer">


        </div>
    )

}

export default Timer;