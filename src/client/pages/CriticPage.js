import React from 'react'

import TrophyCase from '../components/criticPage/TrophyCase'
import PlayerList from '../components/criticPage/PlayerList'
import CriticContainer from '../components/criticPage/CriticContainer';

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