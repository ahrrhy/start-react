let mockApiData = [
    {
        id: 1,
        name: 'Enter Sandman',
        description: 'test1',
        favorite: false
    },
    {
        id: 2,
        name: 'Dovakin',
        description: 'test2',
        favorite: false
    },
    {
        id: 3,
        name: 'Viva Las-Vegas',
        description: 'test3',
        favorite: false
    }
];

export const getTickets = () => dispatch => {
    setTimeout(() => {
        console.log('got tickets');
        dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: mockApiData })
    }, 2000);
};