import React from 'react'

import Header from '../components/Header'
import TrophyCase from '../components/TrophyCase'
import PlayerList from '../components/PlayerList'
import CriticContainer from '../components/CriticContainer';
import { getNbaAllTime, getNhlAllTime, getPgaAllTime } from '../actions/allTime-actions'
import { getNbaCritic, getNhlCritic, getPgaCritic } from '../actions/critic-actions'


const CriticPage = () => (
    <div className='container'>
        <Header />
        <div className='content'>
            <TrophyCase />
            <PlayerList />
            <CriticContainer />
        </div>
    </div>
)

const loadData = (store, path) => {
    
    return (
        store.dispatch(getNbaAllTime()),
        store.dispatch(getNbaCritic()),

        store.dispatch(getNhlAllTime()),
        store.dispatch(getNhlCritic()),

        store.dispatch(getPgaAllTime()),
        store.dispatch(getPgaCritic()),

        store.dispatch(getNbaAllTime()),
        store.dispatch(getNbaCritic())

    )
}

export default {
    loadData,
    component: CriticPage
}