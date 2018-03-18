export default function taskList(state = [], action) {
    if (action.type === 'ADD_TICKET') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TICKETS_SUCCESS') {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === 'MAKE_FAVORITE') {
        return [
            action.payload
        ]
    } else if (action.type === 'DELETE_FAVORITE') {
        return [
            action.payload
        ]
    } else if (action.type === 'DELETE_TICKET') {
        console.log(action.id);
        return state.filter(ticket => +ticket.id !== +action.id)
    }
    return state;
}