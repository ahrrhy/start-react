import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../elements/Menu';
import TicketElement from '../elements/TicketElement';
import {getTickets} from '../../actions/getTickets';

let action = '/fetch';

class App extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.onGetTickets();
    }

    render() {
        return (
            <div>
                <Menu/>
                <div  className="row">
                    <div className="col s6">
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn">Get ticket</button>
                            </div>
                        </div>
                    </div>
                    <ul className="col s6">
                        <TicketElement/>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        tickets: state.tickets,
        ownProps
    }),
    dispatch => ({
        onGetTickets: () => {
            dispatch(getTickets(action));
        }
    })
)(App);
