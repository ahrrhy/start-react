let mockApiData = [
    {
        id: 1,
        name: 'Enter Sandman'
    },
    {
        id: 2,
        name: 'Dovakin'
    },
    {
        id: 3,
        name: 'Viva Las-Vegas'
    }
];

export const getTickets = () =>dispatch => {
    setTimeout(() => {
        console.log('got tracks');
        dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: mockApiData })
    }, 2000);
};