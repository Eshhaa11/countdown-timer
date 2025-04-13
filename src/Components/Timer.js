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
         }


    return (
        <div>


        </div>
    )

}

export default Timer;