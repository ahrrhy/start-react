import React, { Component } from 'react';
import Menu from '../elements/Menu';

class About extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="container">
                    <p>It is my first React JS application. I have to create a to-do list. Every ticket should be editable and has it's own page.</p>
                </div>
            </div>
        );
    }
}

export default About;