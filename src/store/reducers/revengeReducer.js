const INITIAL_STATE = {
    revenges: [],
}

export function revengeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_REVENGES':
            return {
                ...state,
                revenges: action.revenges
            }
        case 'ADD_REVENGE':
            return {
                ...state,
                revenges: [...state.revenges, action.savedRevenge]
            }
        case 'UPDATE_REVENGE':
            return {
                ...state,
                revenges: state.revenges.map(revenge => revenge._id === action.savedRevenge._id ? action.savedRevenge : revenge)
            }
        case 'REMOVE_REVENGE':
            return {
                ...state,
                revenges: state.revenges.filter(revenge => revenge._id !== action.revengeId)
            }

        default:
            return state;
    }
}