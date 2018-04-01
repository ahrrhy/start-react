import React, {Component} from 'react';
import { connect } from 'react-redux';

import Menu from '../elements/Menu';
import {getTicketsData} from "../../actions/getTicketsData";

class Ticket extends Component {

    // componentDidMount() {
    //     console.log(this.props.ticket._id);
    //     if (this.props === undefined) {
    //         this.props.getTicketData();
    //     }
    // }

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
            dispatch(getTicketsData());
        }
    })

)(Ticket);
