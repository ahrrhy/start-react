export default function taskList(state = [], action) {
    if (action.type === 'ADD_TICKET') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TICKETS_SUCCESS') {
        return [
            ...action.payload
        ];
    } else if (action.type === 'MAKE_FAVORITE') {

        return [
            ...state,
            action.payload
        ]
    } else if (action.type === 'DELETE_TICKET') {
        console.log(action);
        return [
            ...state
        ]
    }
    return state;
}