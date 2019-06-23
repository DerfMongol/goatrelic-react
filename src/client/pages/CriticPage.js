import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import ListHeader from '../components/criticPage/ListHeader'
import SportStats from '../components/criticPage/SportStats'
import { getNbaFans, getNhlFans, getPgaFans } from '../actions/fans-actions'
import { getNbaFansAllTime, getNhlFansAllTime, getPgaFansAllTime } from '../actions/fansAllTime-actions'



class CriticPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: props.match.path.replace('/', '')
        }
        this.onPathClick = this.onPathClick.bind(this)
    }

    componentDidMount() {
        this.props.getNbaFans()
        this.props.getNhlFans()
        this.props.getPgaFans()
        this.props.getNbaFansAllTime()
        this.props.getNhlFansAllTime()
        this.props.getPgaFansAllTime()
    }
    componentWillMount() {
        let path
        console.log(this.props.match.path)
        if (this.props.location.pathname.includes('critics')) {
            path = 'critics'
        } else if (this.props.location.pathname.includes('players')) {
            path = 'players'
        } else if (this.props.location.pathname.includes('fans')) {
            path = 'fans'
        } else {
            path = 'critics'
        }
        this.setState({
            path
        })
    }
    onPathClick(path) {
        this.setState({
            path
        })
    }

    render() {
        return (
            <div>
                <ListHeader onPathClick={this.onPathClick} />
                <div className='container'>
                    <div className='content'>
                        <SportStats route={this.state.path} />
                    </div>
                </div>
            </div>
        )
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(getNbaFans()),
        store.dispatch(getNhlFans()),
        store.dispatch(getPgaFans()),
        store.dispatch(getNbaFansAllTime()),
        store.dispatch(getNhlFansAllTime()),
        store.dispatch(getPgaFansAllTime()),
    ])
}

export default {
    loadData,
    component: withRouter(connect(null, {
        getNbaFans,
        getNhlFans,
        getPgaFans,
        getNbaFansAllTime,
        getNhlFansAllTime,
        getPgaFansAllTime
    })(CriticPage))
}