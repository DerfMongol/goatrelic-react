import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import reducers from '../client/reducers'

export default (req) => {

    const axiosInstance = axios.create({
        baseURL: 'https://salty-thicket-36195.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' },
        withCredentials: true
    })

    const store = createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))

    )

    return store
}

