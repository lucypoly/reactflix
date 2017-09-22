import { combineReducers } from 'redux'
import feed from './feed'
import movie from './movie'

export default combineReducers({
    feed,
    movie
})