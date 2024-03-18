import React from "react";
// import img from '../images/katie-zaferes.png';
// import star from '../images/star.png'
export default function Card(props){
    return(
        // <section className="section">
            <div className="sec">
                <img src={require(`../images/${props.img}`)} className="mainpic" alt="" />
                <div>
                    <div style={{display:"flex",alignItems:"center",height:35}}>
                        <img src={require(`../images/${props.star}`)} alt="" style={{width:15,height:15}} / >
                        <p style={{marginLeft:5,marginTop:14,fontSize:12}}>{props.text} ({props.num}) {props.country}</p>
                    </div>
                    <p style={{fontSize:12,marginTop:0,marginBottom:0}} >{props.title}</p>
                    <p style={{fontSize:12,marginTop:4}}><span style={{fontWeight:"bolder"}}>From ${props.price} </span>/ person</p>
                </div>
            </div>
        
    )
}