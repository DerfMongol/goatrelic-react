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
        this.state = {
            phoneMenu: false,
            backDrop: null
        }
        this.phoneMenuClick = this.phoneMenuClick.bind(this)
        this.onBackDropClick = this.onBackDropClick.bind(this)
    }
    phoneMenuClick() {
        this.setState(({
            phoneMenu: true,
            backDrop: 'backdrop'
        }))
    }
    onBackDropClick() {
        this.setState({
            phoneMenu: false,
            backDrop: null
        })
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
            <div >
                <div className={this.state.backDrop} onClick={this.onBackDropClick}></div>
                <Header phoneMenuClick={this.phoneMenuClick} phoneMenu={this.state.phoneMenu} />
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





