import React from "react";
import Nav from "./Components/Navbar";
import "./Styles/index.css"

import Card from "./Components/Card";


export default function App(){
    return (
        <div className="container">
            <Nav />
            <Card
              img="https://runnersconnect.net/wp-content/uploads/2019/06/Katie-Zaferes-2-by-Tommy-Zaferes-e1560905773494.jpeg"
              rating={5.0}
              reviews = {6}
              country="USA"
              title="Life lessons with Katie Zaferes"
              amount = {136}
            />
           
        </div>
        
    )
}