import React from 'react';
import "./style.css";

const Cards = function (props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} width="200" />
            </div>
        </div>
    )
}
export default Cards;