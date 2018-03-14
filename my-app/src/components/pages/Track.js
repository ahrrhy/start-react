import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../elements/Menu';

class Track extends Component {

    render() {
        return (
            <div>
                <Menu />
                <div className="container">
                    Track
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {};
};

export default connect(mapStateToProps)(Track);