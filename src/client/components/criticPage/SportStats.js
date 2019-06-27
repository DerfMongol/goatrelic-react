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
            <PlayerList route={props.route} allTime={props.allTime}/>
            <CriticContainer profiles={props.profiles} route={props.route} />
        </div>
    )
}

const mapStateToProps = (state, props) => {

    if (props.route === 'critics') {
        return {
            profiles: state.critics,
            allTime: state.allTime
        }
    } else if (props.route === 'players') {
        return {
            profiles: state.players,
            allTime: state.playersAllTime
        }
    } else if (props.route === 'fans') {
        return {
            profiles: state.fans,
            allTime: state.fansAllTime
        }
    } else {
        return {
            profiles: state.critics,
            allTime: state.allTime
        }

    }

}

export default withRouter(connect(mapStateToProps)(SportStats))