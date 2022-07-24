import { revengeService } from "../../services/revenge.service"

export function loadRevenges() {
    return (dispatch, getState) => {
        const revenges = revengeService.query()
        dispatch({ type: 'SET_REVENGES', revenges })
    }
}

export function saveRevenge(revenge) {
    return (dispatch, getState) => {
        const savedRevenge = revengeService.save(revenge)
        console.log(revenge);
        if (!revenge._id) {
            dispatch({ type: 'ADD_REVENGE', savedRevenge })
        } else {
            dispatch({ type: 'UPDATE_REVENGE', savedRevenge })
        }
    }
}

export function removeRevenge(revengeId) {
    return (dispatch, getState) => {
        revengeService.remove(revengeId)
        dispatch({ type: 'REMOVE_REVENGE', revengeId })
    }
}