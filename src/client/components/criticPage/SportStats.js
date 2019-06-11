import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import TrophyCase from './TrophyCase'
import PlayerList from './PlayerList'
import CriticContainer from './CriticContainer'
import FansContainer from './FansContainer';

const SportStats = (props) => {
    let pathContainer 
        if (props.path === 'critics') {
            pathContainer = <CriticContainer profiles={props.profiles}/>
        } else if (props.path === 'players') {
            pathContainer = null
        } else if (props.path === 'fans') {
            pathContainer = <FansContainer profiles={props.profiles}/>
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

    if (props.path === 'critics') {
        return {
            profiles: state.critics
        }
    } else if (props.path === 'players') {
        return {
            profiles: null
        }
    } else if (props.path === 'fans') {
        return {
            profiles: state.user.users
        }
    } else {
        return {
            profiles: state.critics
        }

    }

}

export default {
    component: withRouter(connect(mapStateToProps)(SportStats))
}