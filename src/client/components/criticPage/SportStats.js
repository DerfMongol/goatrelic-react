import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import TrophyCase from './TrophyCase'
import PlayerList from './PlayerList'
import CriticContainer from './CriticContainer'

const SportStats = () => {
    return (
        <div>
            <TrophyCase />
            <PlayerList />
            <CriticContainer />
        </div>
    )
}

export default {
    component: withRouter(SportStats)
}