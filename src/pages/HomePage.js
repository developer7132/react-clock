import React, { useReducer } from "react";
import { ClockHourHand, ClockIndicator, ClockMinuteHand, ClockRing, ClockSecondHand } from "../components";

import "./HomePage.scss";
export const HomePage = () => {
  const Indicators = [];
  for(let i = 0; i< 60 ; i++){
    Indicators.push(ClockIndicator());
  }  
  return (    
    <div className="container">
      <ClockRing />
      <div className="indicators">
        {Indicators}
      </div>
      <ClockHourHand />
      <ClockMinuteHand />
      <ClockSecondHand />      
      
    </div>
  );
};