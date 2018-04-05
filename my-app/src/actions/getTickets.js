export const getTickets = (action) => {
    return dispatch => {
        return fetch(action, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if(response.status == 200){
                    let fetchedTickets = [];
                    response.json().then((tickets) => {
                        tickets.map((ticket) => {
                            fetchedTickets.push(ticket);
                        });
                        console.log(tickets);
                        dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: fetchedTickets })
                    });

                } else {
                    dispatch({ type: 'TICKET_ERROR', payload: "getTickets error" })
                }
            });
    }
};