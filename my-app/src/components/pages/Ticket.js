import React, {Component} from 'react';
import { connect } from 'react-redux';

import Menu from '../elements/Menu';
import {getTickets} from "../../actions/getTickets";

let action = '/ticket/:_id',
    actionNext = '/fetch';

class Ticket extends Component {

    constructor(props) {
        super(props);
        this.myTicket = {};
    }

    componentWillMount() {
        this.props.onGetData();
    }

    componentDidMount() {
        this.ticket();
    }
    ticket() {
        this.ticketData = this.props.tickets.find((ticket) => {
            return ticket._id === this.props.match.params._id;
        });
        return this.myTicket = this.ticketData;
    }

    render() {

        return (
            <div>
                <Menu/>
                <div className="container">
                { this.myTicket !== undefined ?
                    ( <div>
                        <h1>{this.myTicket.name}</h1>
                        <p>{this.myTicket.description}</p>
                    </div> )
                :  (this.ticket(),
                    <div>
                        <h1>{this.myTicket.name}</h1>
                        <p>{this.myTicket.description}</p>
                    </div>)
                }
                </div>
            </div>
        );
    }
}
export default connect(
    (state, ownProps) => ({
        tickets: state.tickets
    }),
    dispatch => ({
        onGetTickets: () => {
            dispatch(getTickets(action));
        },
        onGetData: () => {
            dispatch(getTickets(actionNext));
        }
    })

)(Ticket);
