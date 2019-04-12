import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

import { getNbaCritic, getNhlCritic, getPgaCritic } from './actions/critic-actions'
import { getNbaAllTime, getNhlAllTime, getPgaAllTime } from './actions/allTime-actions'

const initialState = {}

const middleware = [thunk]

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.dispatch(getNbaCritic())
store.dispatch(getNhlCritic())
store.dispatch(getPgaCritic())

store.dispatch(getNbaAllTime())
store.dispatch(getNhlAllTime())
store.dispatch(getPgaAllTime())

export default store