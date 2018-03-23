import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            const getTickets = () => {
                return dispatch => {
                    return fetch('/fetch', {
                            method: "POST",
                            headers: {'Content-Type': 'application/json'}
                        })
                        .then((response) => {
                            if(response.status == 200){
                                let fetchedTickets = [];
                                response.json().then((tickets) => {
                                    tickets.map((ticket) => {
                                        fetchedTickets.push(ticket);
                                    });
                                    dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: fetchedTickets })
                                });
                            } else {
                                dispatch({ type: 'TICKET_ERROR', payload: "getTickets error" })
                            }
                        });
                }
            };
            dispatch(getTickets());
        }
    })
)(App);
