import React from 'react';

function Navbar(props) {

    return (
        <div className="fixed-top bg-dark text-white py-3">
            <div className="row">
                <div className="col-4">
                <p className="h1 text-left pl-3">70's TV Mashup</p>
                </div>
                <div className="col-4">
                <p className="h2 text-center pt-2">{props.message}</p>
                </div>
                <div className="col-4">
                <p className="h2 text-right  pt-2 pr-3">Score: {props.score} | Top Score: {props.topScore}</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;