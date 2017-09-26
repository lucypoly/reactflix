import { combineReducers } from 'redux';
import feed from './feed';
import sortFilter from './sortFilter';

export default combineReducers({
    feed,
    sortFilter
})