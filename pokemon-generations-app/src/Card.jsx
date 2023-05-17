import React from "react";
import './Card.css';

const Card = ({ title, imageUrl, children }) => {
    return (
        <div className="card">
            {imageUrl && <img className="pokemonImg" src={imageUrl}/>}
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Card;