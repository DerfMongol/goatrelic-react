import React from 'react'

import TrophyCase from '../components/TrophyCase'
import PlayerList from '../components/PlayerList'
import CriticContainer from '../components/CriticContainer';

const CriticPage = () => (
    <div className='container'>
        <div className='content'>
            <TrophyCase />
            <PlayerList />
            <CriticContainer />
        </div>
    </div>
)

export default {
    component: CriticPage
}