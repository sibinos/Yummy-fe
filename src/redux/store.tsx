import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Reducer } from './reducer';
import thunk from 'redux-thunk';
const store=createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;
export type ReducerType = ReturnType<typeof Reducer>
export type StateType = ReturnType<typeof store.getState>