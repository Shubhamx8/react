import React from "react";
import Nav from "./Components/Navbar";
import "./Styles/index.css"

import Card from "./Components/Card";
import cardData from "./data"

export default function App(){
    const cardElements =cardData.map(card)
    function card(detail){
        return <Card 
                    detail={detail}
                />
    } 
    return (
        <>
            <Nav />
            <div className="container">
            {cardElements}
        </div>
       
    </>
        
    )
}