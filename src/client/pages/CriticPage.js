import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'

import ListHeader from '../components/criticPage/ListHeader'

class CriticPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: 'critics'
        }
        this.onPathClick = this.onPathClick.bind(this)
    }
    onPathClick(path) {
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
                        {renderRoutes(this.props.route.routes, {path: this.state.path})}
                    </div>
                </div>
            </div>
        )
    }
}

export default {
    component: withRouter(CriticPage)
}