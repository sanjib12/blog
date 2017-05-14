import { combineReducers, createStore } from "redux";
import NavigateReducers from "./../reducers/NavigateReducers";

var initialState = {};

var reducers = combineReducers({
    navigate: NavigateReducers
});

const store = createStore(reducers, initialState);

export default store;