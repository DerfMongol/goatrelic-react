import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'

import ListHeader from '../components/criticPage/ListHeader'
import SportStats from '../components/criticPage/SportStats'

class CriticPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: props.match.path.replace('/', '')
        }
        this.onPathClick = this.onPathClick.bind(this)
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
        console.log(path)
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

export default {
    component: withRouter(CriticPage)
}