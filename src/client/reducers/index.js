import { combineReducers } from 'redux'
import criticReducer from './criticReducer'

export default combineReducers({
    critic: criticReducer
})