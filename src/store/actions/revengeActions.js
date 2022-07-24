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
        dispatch({type:'SAVE_REVENGE', savedRevenge})
    }
}