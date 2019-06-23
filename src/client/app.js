import React from 'react'
import { renderRoutes } from 'react-router-config'

import Header from './components/Header'
import { getNbaAllTime, getNhlAllTime, getPgaAllTime } from './actions/allTime-actions'
import { getNbaCritic, getNhlCritic, getPgaCritic } from './actions/critic-actions'
import { fetchCurrentUser, fetchAllUsers } from './actions/user-actions'

const App = ({ route }) => (
    <div>
        <Header />
        {renderRoutes(route.routes)}
    </div>
)

const loadData = (store) => {
    return Promise.all([
        store.dispatch(getNbaAllTime()),
        store.dispatch(getNbaCritic()),

        store.dispatch(getNhlAllTime()),
        store.dispatch(getNhlCritic()),

        store.dispatch(getPgaAllTime()),
        store.dispatch(getPgaCritic()),

        store.dispatch(fetchCurrentUser()),
        store.dispatch(fetchAllUsers())
    ])
}

export default {
    loadData,
    component: App
}





