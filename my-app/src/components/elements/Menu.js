import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Logo</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Tracks</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;