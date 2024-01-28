import React from "react";
import "./Card.css"

function Card(props){
    return (<>
    <div class="card">
        <img src="https://via.placeholder.com/300" alt="Card Image"/>
        <div className ="card-content">
        <h2 className ="card-title">Card Title</h2>
        <h2 className = "name">{props.name}</h2>
        <p className ="card-description">This is a simple card component with HTML and CSS.</p>
        </div>
    </div>
    </>
    )
}

export default Card;