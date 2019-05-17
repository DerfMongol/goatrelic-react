import { combineReducers } from 'redux'

import criticReducer from './criticReducer'
import allTimeReducer from './allTimeReducer';
import userReducer from './userReducer'

export default combineReducers({
    critics: criticReducer,
    allTime: allTimeReducer,
    user: userReducer
})