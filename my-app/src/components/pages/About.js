import React, { Component } from 'react';
import Menu from '../elements/Menu';

class About extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="container">
                    This is our cool music app
                </div>
            </div>
        );
    }
}

export default About;