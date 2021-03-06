// Startup point for the client side application
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'
import reducers from './reducers'
import axios from 'axios'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const axiosInstance = axios.create({
    baseURL: '/api'
})

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    composeSetup(
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    )
)


ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {renderRoutes(Routes)}
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#app')
)