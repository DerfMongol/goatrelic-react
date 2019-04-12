import { combineReducers } from 'redux'
import criticReducer from './criticReducer'
import allTimeReducer from './allTimeReducer';

export default combineReducers({
    critic: criticReducer,
    allTime: allTimeReducer
})