import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTicketForm extends Component {

    addTicket() {
        this.props.onAddTicket(this.ticketNameInput.value, this.ticketDescriptionInput.value);
        this.ticketNameInput.value = '';
        this.ticketDescriptionInput.value = '';
    }

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="ticket_name" type="text"
                                   ref={(input) => { this.ticketNameInput = input }}
                            />
                            <label htmlFor="ticket_name">Ticket name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"  ref={(input) => { this.ticketDescriptionInput = input }}/>
                            <label htmlFor="textarea1">Ticket description</label>
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <button type="button" className="waves-effect waves-light btn btn-add" onClick={this.addTicket.bind(this)}>Add Ticket</button>
                    </div>
                </form>
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
        onAddTicket: (name, description) => {
            const payload = {
                id: Date.now().toString(),
                name: name,
                description: description
            };
            dispatch({ type: 'ADD_TICKET', payload });
        },
    })
)(AddTicketForm);