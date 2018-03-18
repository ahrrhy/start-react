let mockApiData = [
    {
        id: 1,
        name: 'Enter Sandman',
        description: 'test1'
    },
    {
        id: 2,
        name: 'Dovakin',
        description: 'test2'
    },
    {
        id: 3,
        name: 'Viva Las-Vegas',
        description: 'test3'
    }
];

export const getTickets = () => dispatch => {
    setTimeout(() => {
        console.log('got tickets');
        dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: mockApiData })
    }, 2000);
};