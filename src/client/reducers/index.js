import { combineReducers } from 'redux'

import criticReducer from './criticReducer'
import allTimeReducer from './allTimeReducer';
import userReducer from './userReducer'
import fansReducer from './fansReducer'

export default combineReducers({
    critics: criticReducer,
    allTime: allTimeReducer,
    user: userReducer,
    fans: fansReducer
})