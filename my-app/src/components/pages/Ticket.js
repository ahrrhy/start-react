import React, {Component} from 'react';
import { connect } from 'react-redux';

import Menu from '../elements/Menu';
import {getTickets} from "../../actions/getTickets";

class Ticket extends Component {

    componentDidMount() {
        console.log(this.props.location.pathname);
        if ( this.props.ticket._id === undefined ) {
            this.props.getTicketData();
        }
        else console.log(this.props.ticket._id);
    }

    render() {
        return (
            <div>
                <Menu/>
                <div className="container">
                    <h1>{this.props.ticket.name}</h1>
                    <p>{this.props.ticket.description}</p>
                </div>
            </div>
        );
    }
}
export default connect(
    (state, ownProps) => ({
        ticket: state.tickets.find( (ticket) => {
            return ticket._id === ownProps.match.params._id;
        })
    }),
    dispatch => ({
        getTicketData: () => {
            console.log('this');
            dispatch(getTickets());
        }
    })

)(Ticket);
