import {combineReducers, legacy_createStore as createStore} from "redux";
import navbarReducer from "./navbar-reducer"
import newSechReducer from "./newsech-reducer";

let reducers = combineReducers({
    navbar: navbarReducer,
    newsech: newSechReducer
})

let store = createStore(reducers);

window.store = store;

export default store;