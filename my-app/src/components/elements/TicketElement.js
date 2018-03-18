import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    delete_icon: {
        display: 'inline-block'
    }
});

class TicketElement extends Component {

    deleteTicket(e) {
        e.preventDefault();
        this.props.onDeleteTicket();
    }

    makeFavorite(e) {
        e.preventDefault();
    }

    render() {
        return (
            this.props.tickets.map((ticket, index) =>
                <li className="row" key={index}>
                    <div className="col s12 offset-m2 m8">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{ticket.name}</span>
                                <p>{ticket.description}</p>
                            </div>
                            <div className="card-action">
                                <Link to={`/tickets/${ticket.id}`}>
                                    Edit Ticket
                                </Link>
                                <a href="/" onClick={ this.makeFavorite.bind(this) }><i className="material-icons">favorite</i></a>
                                <a href="/" onClick={ this.deleteTicket.bind(this) }><i className="material-icons">delete</i></a>
                            </div>
                        </div>
                    </div>
                </li>
            )
        )
    }
}

export default connect(
    (state, ownProps) => ({
        tickets: state.tickets,
        ownProps
    }),
    dispatch => ({
        onAddFavorite: (name, description) => {
            const payload = {
                id: Date.now().toString(),
                name: name,
                description: description
            };
            dispatch({ type: 'MAKE_FAVORITE', payload });
        },
        onDeleteTicket: (ticket) => {
            console.log(ticket);
            dispatch({ type: 'DELETE_TICKET', payload: ticket });
        }
    })
)(TicketElement);