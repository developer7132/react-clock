import {React, useEffect, useState} from "react"
import "./ClockSecondHand.scss";

export const ClockSecondHand = (props) => {    
    let count = new Date().getSeconds();
    const [secondHandRotation, setSecondHandRotation] = useState({});

    useEffect(()=>{        
        setTimeout(() => {
            count = new Date().getSeconds();
            setSecondHandRotation({
                transform: `rotateZ(calc(6deg * ${count})`
            })
        }, 1000)
    },[secondHandRotation]);
    
    return (
        <div className="second-hand" style={secondHandRotation}>
        </div>
    )    
}