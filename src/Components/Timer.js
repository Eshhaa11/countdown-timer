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
    


    return (
        <div>


        </div>
    )

}

export default Timer;