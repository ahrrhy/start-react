import React, { Component } from 'react';

import Menu from '../elements/Menu';
import AddTicketForm from '../elements/AddTicketForm';

class CreateTicket extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <div  className="row">
                    <div className="col s6">
                        <AddTicketForm/>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateTicket;