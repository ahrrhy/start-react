const initialState = [
    {
        id: 1324,
        name: 'Some task'
    }
];

export default function taskList(state = initialState, action) {
    if (action.type === 'ADD_TICKET') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TICKETS_SUCCESS') {
        return action.payload;
    }
    return state;
}