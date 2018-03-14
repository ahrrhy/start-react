const initialState = '';

export default function lists(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return action.payload.name;
    }else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
}