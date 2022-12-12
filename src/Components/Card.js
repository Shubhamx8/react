import React from "react";

export default function Card(prop){
    return (
        <div className="card">
            <img src={prop.img} className="card--img"/>
            <div className="card--ratings gray">
                <img src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" className="star-logo" />
                <p>&nbsp;{prop.rating}({prop.reviews})&nbsp;&bull;&nbsp;{prop.country}</p>
            </div>
            <p>{prop.title}</p>
            <p><strong>From ${prop.amount}</strong>/ person</p>
        </div>
        
        
    )
}

