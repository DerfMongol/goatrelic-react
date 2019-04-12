import React from 'react'

import { connect } from 'react-redux'
import PlayerListCat from './PlayerListCat'

const PlayerList = (props) => (
    <div className='list'>
        <div className='stat-head'>Critics Top Players of All Time</div>
        <div className='all-time'>
            <div className='cats-banner'></div>
            <PlayerListCat title="Rank" />
            <PlayerListCat title="Player" />
            <PlayerListCat title="Lists" />
            <PlayerListCat title="Avg." />
        </div>
        <div className='total-foot'>()</div>
    </div>
)



export default PlayerList