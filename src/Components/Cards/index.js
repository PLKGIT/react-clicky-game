import React from 'react';
import "./style.css";

const Cards = function (props) {
    return (
        <div className="card">
            <span onClick={() => props.HandleCardClicked(props.id)} className="clicked">
            <div className="img-container">
                <img alt={props.name} src={props.image} width="200" />
            </div>
            </span>
        </div >
    )
}
export default Cards;



