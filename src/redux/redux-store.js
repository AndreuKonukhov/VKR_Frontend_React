import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import navbarReducer from "./navbar-reducer"
import newSechReducer from "./newsech-reducer";
import selectedSechReducer from "./selectedsech-reducer"
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    navbar: navbarReducer,
    newsech: newSechReducer,
    selectedsech: selectedSechReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;