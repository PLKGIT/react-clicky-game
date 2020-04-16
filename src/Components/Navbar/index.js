import React from './node_modules/react';

function Navbar() {

    return (
        <nav className="navbar navbar-dark bg-primary">

            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <h2>Message: {props.message}</h2>
                </li>
                <li class="nav-item active">
                    <h2>Score: {props.score}</h2>        </li>
                <li class="nav-item active">
                    <h2>Top Score: {props.topScore}</h2>        </li>

            </ul>
        </nav>
    )
}

export default Navbar;