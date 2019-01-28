import { combineReducers } from 'redux'
import  JokesReducer  from './Jokes/index'

export default combineReducers({
    Jokes: JokesReducer
})
