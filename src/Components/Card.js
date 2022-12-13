import React from "react";

export default function Card(prop){
    return (
        <div className="card">
            <img src={prop.detail.img} className="card--img"/>
            <div className="card--ratings gray">
                <img src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" className="star-logo" />
                <p>&nbsp;{prop.detail.rating}({prop.detail.reviews})&nbsp;&bull;&nbsp;{prop.detail.country}</p>
            </div>
            <p>{prop.detail.title}</p>
            <p><strong>From ${prop.detail.amount}</strong>/ person</p>
        </div>
        
        
    )
}

