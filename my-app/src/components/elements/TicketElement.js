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

    deleteTicket(target) {
        console.log(target);
        this.props.onDeleteTicket(target);
    }

    makeFavorite(target) {
        console.log(target);
        this.props.onAddFavorite(target);
    }

    makeNotFavorite(target) {
        console.log(target);
        this.props.onDeleteFavorite(target);
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
                                <Link to={`/tickets/${ticket.id}`}>
                                    Edit Ticket
                                </Link>
                                { ticket.favorite === false ? <span onClick={ this.makeFavorite.bind(this, ticket) }><i className="material-icons">favorite</i></span>
                                    :
                                    <span onClick={
                                        this.makeNotFavorite.bind(this, ticket) }><i className="material-icons red-text">favorite</i></span>

                                }
                                <span  onClick={ this.deleteTicket.bind(this, ticket.id) }><i className="material-icons">delete</i></span>
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
        onAddFavorite: (ticket) => {
            const payload = {
                ...ticket,
                favorite: true
            };
            dispatch({ type: 'MAKE_FAVORITE', payload });
        },
        onDeleteFavorite: (ticket) => {
            const payload = {
                ...ticket,
                favorite: false
            };
            dispatch({ type: 'DELETE_FAVORITE', payload })
        },
        onDeleteTicket: (id) => {
            dispatch({ type: 'DELETE_TICKET', id });
        }
    })
)(TicketElement);