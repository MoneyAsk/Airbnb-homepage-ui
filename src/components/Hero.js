import React from "react";
import image from '../images/photo-grid.png';
export default function Hero(){
    return(
        <div className="hero">
            <img src={image} alt="" />
            <h1 className="heading">Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
    )
}