import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { StyleSheet, css } from 'aphrodite';
import {getTickets} from "../../actions/getTickets";

const styles = StyleSheet.create({
    delete_icon: {
        display: 'inline-block'
    }
});

let action = '/fetch';

class TicketElement extends Component {

    deleteTicket(target) {
        console.log(target);
        this.props.onDeleteTicket(target);
        this.props.onGetData();
    }

    toggleFavorite(target) {
        console.log(target);
        this.props.onToggleFavorite(target);
    }

    render() {
        return (
            this.props.tickets.map((ticket, index) =>
                <li className="row" key={index}>
                    <div className="col s12 offset-m2 m8">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{ ticket.name }</span>
                                <p>{ ticket.description }</p>
                            </div>
                            <div className="card-action">
                                <Link to={`/tickets/${ticket._id}`}>
                                    Edit Ticket
                                </Link>
                                { ticket.favorite === false ?
                                    <span onClick={ this.toggleFavorite.bind(this, ticket) }><i className="material-icons">favorite</i></span>
                                    :
                                    <span onClick={ this.toggleFavorite.bind(this, ticket) }><i className="material-icons red-text">favorite</i></span>

                                }
                                <span  onClick={ this.deleteTicket.bind(this, ticket)}><i className="material-icons">delete</i></span>
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
        onToggleFavorite: (ticket) => {
            const toggleFavorite = () => {
                return dispatch => {
                    return fetch('/favorite', {
                        method: "POST",
                        body: JSON.stringify({ticket: ticket}),
                        headers: {'Content-Type': 'application/json'}
                    }).then((response) => {
                        if (response.status == 200) {
                            if (ticket.favorite === false) {
                                ticket.favorite = true;
                            } else {
                                ticket.favorite = false;
                            }
                            dispatch({ type: 'TOGGLE_FAVORITE', payload: ticket });
                        } else {
                            dispatch({ type: 'TICKET_ERROR', payload: "addTICKET error" })
                        }
                    });
              }
            };
            dispatch(toggleFavorite());
        },
        onDeleteTicket: (ticket) => {
            const deleteOneTicket = () => {
                return dispatch => {
                    return fetch('/deleteOne', {
                        method: "POST",
                        body: JSON.stringify({ticket: ticket}),
                        headers: {'Content-Type': 'application/json'}
                    }).then((response) => {
                        if (response.status == 200) {
                            dispatch({ type: 'DELETE_TICKET', payload: ticket });
                        } else {
                            dispatch({ type: 'TICKET_ERROR', payload: "deleteTICKET error" })
                        }
                    });
                }
            };
            dispatch(deleteOneTicket());
        },
        onGetData: () => {
            dispatch(getTickets(action));
        }
    })
)(TicketElement);