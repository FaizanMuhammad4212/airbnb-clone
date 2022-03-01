import React from "react"
import img1 from "../images/star.png"
export default function Card(props){
    let badge
    if(props.openspot===0){
      badge="SOLD OUT"
}
    else if(!props.openspot){
      badge="ONLINE"
      }
    return( 
        <div className="cont1">
            {badge && <div className="sold">{badge}</div>}
            <img src={props.img} alt="" className="katy"></img>
            <div className="rate">
            <img src={img1} alt="" className="star"></img>
            <p>{props.rat}</p>
            <p className="rate2"><span>{props.rev}{props.country}</span></p>
            </div>
            <p className="par">{props.title}</p>
            <div className="para1">
            <h4>{props.price}</h4><p>person</p>
            </div>
        </div>
    )
}