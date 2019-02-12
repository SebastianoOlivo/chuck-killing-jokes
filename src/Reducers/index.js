import {combineReducers} from 'redux';
import JokeReducer from './Jokes/index';

export default combineReducers({
    Jokes : JokeReducer
})