import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTickets } from '../../actions/tickets';
import Menu from '../elements/Menu';

class App extends Component {

    addTicket() {
        console.log('addTicket', this.ticketInput.value);
        this.props.onAddTicket(this.ticketInput.value);
        this.ticketInput.value = '';
    }
    findTicket() {
        console.log('findTicket', this.searchInput.value);
        this.props.onFindTicket(this.searchInput.value);
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
                                <input type="text" ref={(input) => { this.ticketInput = input }}/>
                                <button className="waves-effect waves-light btn" onClick={this.addTicket.bind(this)}>Add ticket</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" ref={(input) => { this.searchInput = input }}/>
                                <button className="waves-effect waves-light btn" onClick={this.findTicket.bind(this)}>Find ticket</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="waves-effect waves-light btn" onClick={this.props.onGetTickets}>Get ticket</button>
                            </div>
                        </div>
                    </div>
                    <ul className="col s6">
                        { this.props.tickets.map((ticket, index) =>
                            <li className="row" key={index}>
                                <div className="col s12 m6">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">{ticket.name}</span>
                                            <p>{ticket.id}</p>
                                        </div>
                                        <div className="card-action">
                                            <p><Link to={`/tickets/${ticket.id}`}>
                                                to Ticket
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
        tickets: state.tickets.filter(ticket => ticket.name.includes(state.filter)),
        ownProps
    }),
    dispatch => ({
        onAddTicket: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({ type: 'ADD_TICKET', payload });
        },
        onFindTicket: (name) => {
            console.log('name', name);
            dispatch({ type: 'FIND_TICKET', payload: name});
        },
        onGetTickets: () => {
            dispatch(getTickets());
        }
    })
)(App);
