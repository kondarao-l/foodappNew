import Reducer from "./Reducer";
import { createStore } from "redux";

const store = createStore(Reducer)



export default store



/*
// store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;

*/