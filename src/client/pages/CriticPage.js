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
        } if (this.props.location.pathname.includes('players')) {
            path = 'players'
        } if (this.props.location.pathname.includes('fans')) {
            path = 'fans'
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
                <div className='container'>
                    <div className='content'>
                        <ListHeader onPathClick={this.onPathClick} />
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