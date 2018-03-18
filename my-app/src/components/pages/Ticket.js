import React, {Component} from 'react';
import { connect } from 'react-redux';

import Menu from '../elements/Menu';

class Ticket extends Component {

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
            return Number(ticket.id) === Number(ownProps.match.params.id);
        })
    })
)(Ticket);
