import React from 'react';

function Header() {
    return (
        <div className="jumbotron bg-primary text-white mt-5">
            <h1 className="display-4 text-center">Clicky Game</h1>
            <p className="lead text-center">Click on an image to earn points, but don't click any image more than once!</p>
        </div>
    )
}

export default Header;