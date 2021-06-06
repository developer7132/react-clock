import {React, useEffect, useState} from "react"
import "./ClockHourHand.scss";

export const ClockHourHand = (props) => {    
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    const [hourHandRotation, setHourHandRotation] = useState({
        transform: `rotateZ(calc(30deg * ${hour + min/60})`
    });

    useEffect(()=>{        
        setTimeout(() => {
            hour = new Date().getHours();
            min = new Date().getMinutes();
            setHourHandRotation({
                transform: `rotateZ(calc(30deg * ${hour + min/60})`
            })
        }, 60000)
    },[hourHandRotation]);

    return (        
        <div>
            <div className="hour-hand" style={hourHandRotation}>
            </div>
        </div>
    )    
}