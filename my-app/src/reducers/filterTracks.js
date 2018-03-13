export default function filterTracks(state = '', action) {
    if (action === 'FIND_TRACK') {
        return action.payload;
    }
    return state;
}