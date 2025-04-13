import { useState, useEffect, use } from "react";
import './Timer.css';

function Timer ({ initialTime }) {
    const [time, setTime] = useState(initialTime)

    useEffect(() => {
        if ( time <= 0) return;

        const timer = setInterval(() => {
            
        }
    )
    }
)

    return (
        <div>


        </div>
    )

}

export default Timer;