import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'

import Header from './components/Header'
import { getNbaAllTime, getNhlAllTime, getPgaAllTime } from './actions/allTime-actions'
import { getNbaCritic, getNhlCritic, getPgaCritic } from './actions/critic-actions'
import { fetchCurrentUser, fetchAllUsers } from './actions/user-actions'

class Start extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getNbaAllTime()
        this.props.getNhlAllTime()
        this.props.getPgaAllTime()
        this.props.getNbaCritic()
        this.props.getNhlCritic()
        this.props.getPgaCritic()
        this.props.fetchAllUsers()
        this.props.fetchCurrentUser()
    }
    render() {
        return (
            <div>
                <Header />
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }

}

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
    component: connect(null, {
        getNbaAllTime,
        getNhlAllTime,
        getPgaAllTime,
        getNbaCritic,
        getNhlCritic,
        getPgaCritic,
        fetchAllUsers,
        fetchCurrentUser
    })(Start)
}





