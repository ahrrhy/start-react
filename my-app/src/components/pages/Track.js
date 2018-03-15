import React, {Component} from 'react';
import { connect } from 'react-redux';

class Track extends Component {

    render() {
        return (
            <div>{this.props.track.name}</div>
    );
    }
}
export default connect(
    (state, ownProps) => ({
        track: state.tracks.find(track => track.id),
        ownProps})
)(Track);