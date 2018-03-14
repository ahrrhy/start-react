import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTracks } from '../../actions/tracks';
import Menu from '../elements/Menu';

class App extends Component {

    addTrack() {
        console.log('addTrack', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }
    findTrack() {
        console.log('findTrack', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }

    render() {
        console.log(this.props.ownProps);
        return (
            <div>
                <Menu/>
                <div  className="row">
                    <div className="col s6">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" ref={(input) => { this.trackInput = input }}/>
                                <button className="waves-effect waves-light btn" onClick={this.addTrack.bind(this)}>Add track</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" ref={(input) => { this.searchInput = input }}/>
                                <button className="waves-effect waves-light btn" onClick={this.findTrack.bind(this)}>Find track</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn" onClick={this.props.onGetTracks}>Get track</button>
                            </div>
                        </div>
                    </div>
                    <ul className="col s6">
                        { this.props.tracks.map((track, index) =>
                            <li className="row" key={index}>
                                <div className="col s12 m6">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">{track.name}</span>
                                            <p>{track.id}</p>
                                        </div>
                                        <div className="card-action">
                                            <p><Link to={`/tracks/${track.id}`}>
                                                to Track
                                            </Link></p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filter)),
        ownProps
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({ type: 'ADD_TRACK', payload });
        },
        onFindTrack: (name) => {
            console.log('name', name);
            dispatch({ type: 'FIND_TRACK', payload: name});
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);
