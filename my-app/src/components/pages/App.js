import React, { Component } from 'react';
import { connect } from 'react-redux';


import { getTickets } from '../../actions/getTickets';
import Menu from '../elements/Menu';
import AddTicketForm from '../elements/AddTicketForm';
import TicketElement from '../elements/TicketElement';

class App extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <div  className="row">
                    <div className="col s6">
                        <AddTicketForm/>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn" onClick={this.props.onGetTickets}>Get ticket</button>
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
            dispatch(getTickets());
        }
    })
)(App);
