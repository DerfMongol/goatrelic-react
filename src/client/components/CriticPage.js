import React from 'react'

import Header from './Header'
import TrophyCase from './TrophyCase'
import PlayerList from './PlayerList'
import CriticContainer from './CriticContainer';

const CriticPage = (props) => (
        <div className='container'>
            <Header />
            <div className='content'>
                <TrophyCase path={props.path} />
                <PlayerList  />
                <CriticContainer />
            </div>
        </div>
    )

    

export default CriticPage
