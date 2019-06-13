import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import TrophyCase from './TrophyCase'
import PlayerList from './PlayerList'
import CriticContainer from './CriticContainer'
import FansContainer from './FansContainer';

const SportStats = (props) => {
    let pathContainer 
        console.log(props.route)
        if (props.route === 'critics') {
            pathContainer = <CriticContainer profiles={props.critics}/>
        } else if (props.route === 'players') {
            pathContainer = null
        } else if (props.route === 'fans') {
            pathContainer = <FansContainer profiles={props.user}/>
        } else {
            pathContainer = null
        }
    
    return (
        <div>
            <TrophyCase />
            <PlayerList />
            { pathContainer }
        </div>
    )
}

const mapStateToProps = (state, props) => {

    if (props.route === 'critics') {
        return {
            critics: state.critics
        }
    } else if (props.route === 'players') {
        return {
            players: null
        }
    } else if (props.route === 'fans') {
        return {
            user: state.user.users
        }
    } else {
        return {
            critics: state.critics
        }

    }

}

export default withRouter(connect(mapStateToProps)(SportStats))