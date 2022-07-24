import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { revengeReducer } from "./reducers/revengeReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    revengeModule: revengeReducer
})

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))