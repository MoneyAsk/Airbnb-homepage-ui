import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
// const fs = require("fs");
import data from './data';


export default function App(){
    const cards =data.map(item=>{
        return(
            <Card key={item.id} img={item.coverImg} star="star.png" text={item.stats.rating} num={item.stats.reviewCount} country={item.location} title={item.title} price={item.price}/>
        )
    })
    
    return(
        <div>
            <Navbar />
            <Hero />
            <div style={{display:"flex", marginTop:40,marginLeft:70}}>
                {cards}
            
            </div>
        </div>
    )
}