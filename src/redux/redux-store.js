import {combineReducers, legacy_createStore as createStore} from "redux";



let reducers = combineReducers({
    sechReducer,
    topologyReducer,
})

let store = createStore();

export default store