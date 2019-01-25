import {createStore} from 'redux';
import combineReducers from '../Reducers/index'
import jokeReducers from '../Reducers/index'


export const store = createStore(
    combineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)