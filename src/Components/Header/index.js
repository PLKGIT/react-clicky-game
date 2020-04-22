import React from 'react';

function Header() {
    return (
    <div className="jumbotron jumbotron-fluid bg-primary text-white">
        <div className="container">
            <h1 className="display-4 text-center">Clicky Game</h1>
            <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    </div>
    )
}

export default Header;