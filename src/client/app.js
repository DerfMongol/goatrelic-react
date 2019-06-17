import React from 'react'
import { renderRoutes } from 'react-router-config'

import Header from './components/Header'
import { getNbaAllTime, getNhlAllTime, getPgaAllTime } from './actions/allTime-actions'
import { getNbaCritic, getNhlCritic, getPgaCritic } from './actions/critic-actions'
import { fetchCurrentUser, fetchAllUsers } from './actions/user-actions'
// import { getNbaFans, getNhlFans, getPgaFans } from './actions/fans-actions'

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
        // store.dispatch(getNbaFans()),

        store.dispatch(getNhlAllTime()),
        store.dispatch(getNhlCritic()),
        // store.dispatch(getNhlFans()),

        store.dispatch(getPgaAllTime()),
        store.dispatch(getPgaCritic()),
        // store.dispatch(getPgaFans()),

        store.dispatch(fetchCurrentUser()),
        store.dispatch(fetchAllUsers())

    ])
}

export default {
    loadData,
    component: App
}





