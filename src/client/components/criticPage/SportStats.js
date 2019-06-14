import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import TrophyCase from './TrophyCase'
import PlayerList from './PlayerList'
import CriticContainer from './CriticContainer'

const SportStats = (props) => {
       
    return (
        <div>
            <TrophyCase />
            <PlayerList />
            <CriticContainer profiles={props.profiles} route={props.route} />
        </div>
    )
}

const mapStateToProps = (state, props) => {

    if (props.route === 'critics') {
        return {
            profiles: state.critics
        }
    } else if (props.route === 'players') {
        return {
            profiles: state.critics
        }
    } else if (props.route === 'fans') {
        return {
            profiles: state.fans
        }
    } else {
        return {
            profiles: state.critics
        }

    }

}

export default withRouter(connect(mapStateToProps)(SportStats))