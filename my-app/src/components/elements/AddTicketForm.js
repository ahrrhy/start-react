import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTicketForm extends Component {

    addTicket() {
        console.log('addTicket', this.ticketInput.value);
        this.props.onAddTicket(this.ticketInput.value);
        this.ticketInput.value = '';
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input type="text" ref={(input) => { this.ticketInput = input }}/>
                    <button className="waves-effect waves-light btn" onClick={this.addTicket.bind(this)}>Add ticket</button>
                </div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                    <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                This is an inline input field:
                                <div className="input-field inline">
                                    <input id="email" type="email" className="validate" />
                                        <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                                </div>
                            </div>
                        </div>
                    </form>
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
    })
)(AddTicketForm);