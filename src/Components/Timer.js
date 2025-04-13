import { useState, useEffect, use } from "react";
import './Timer.css';

function Timer ({ initialTime }) {
    const [countdown, setCountDown] = useState(initialTime)

    useEffect(() => {
        if (time <= 0) return;
    }
)

    return (
        <div>


        </div>
    )

}

export default Timer;