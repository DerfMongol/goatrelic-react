import { combineReducers } from 'redux'

import criticReducer from './criticReducer'
import allTimeReducer from './allTimeReducer';
import userReducer from './userReducer'
import fansReducer from './fansReducer'
import fansAllTimeReducer from './fansAllTimeReducer'
import playerReducer from './playerReducer'
import playersAllTimeReducer from './playersAllTimeReducer'

export default combineReducers({
    critics: criticReducer,
    allTime: allTimeReducer,
    user: userReducer,
    fans: fansReducer,
    fansAllTime: fansAllTimeReducer,
    players: playerReducer,
    playersAllTime: playersAllTimeReducer
})