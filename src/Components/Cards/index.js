import React from 'react';

const Cards = function (props) {
    return (
        <div className="card" style="width: 18rem;">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}
export default Cards;