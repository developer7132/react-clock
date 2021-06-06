import React from "react";

export const ClockRing = () => {
    return (
        <div className="ring">
            <svg
            className="clock-ring"
            width="300"
            height="300">
            <circle
                className="progress-ring__circle"
                stroke="url(#gradient)"
                stroke-width="20"
                fill="none"
                r="140"
                cx="150"
                cy="150"/>

            <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="50%" stop-color="#000"></stop>
                <stop offset="75%" stop-color="#888"></stop>
            </linearGradient>
            </svg>
        </div>        

    )
}