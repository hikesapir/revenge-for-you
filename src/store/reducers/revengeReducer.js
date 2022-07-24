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
        case 'SAVE_REVENGE':
            return {
                ...state,
                revenges: [...state.revenges, action.savedRevenge]
            }

        default:
            return state;
    }
}