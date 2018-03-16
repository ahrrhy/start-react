import React, {Component} from 'react';
import { connect } from 'react-redux';

class Ticket extends Component {

    render() {
        return (
            <div>{this.props.ticket.name}</div>
        );
    }
}
export default connect(
    (state, ownProps) => ({
        ticket: state.tickets.find(ticket => ticket.id),
        ownProps})
)(Ticket);