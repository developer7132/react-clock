import {React, useEffect, useState} from "react"
import "./ClockMinuteHand.scss";

export const ClockMinuteHand = (props) => {    
    let sec = new Date().getSeconds();
    let min = new Date().getMinutes();
    const [minuteHandRotation, setMinuteHandRotation] = useState({
        transform: `rotateZ(calc(6deg * ${min + sec/60})`
    });

    useEffect(()=>{        
        setTimeout(() => {
            sec = new Date().getSeconds();
            min = new Date().getMinutes();
            setMinuteHandRotation({
                transform: `rotateZ(calc(6deg * ${min + sec/60})`
            })
        }, 1000)
    },[minuteHandRotation]);
    
    return (
        <div className="minute-hand" style={minuteHandRotation}>
        </div>
    )    
}