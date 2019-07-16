import React from 'react'
import { withRouter } from 'react-router'

import PlayerListCat from './PlayerListCat'

const PlayerList = (props) => {
    let allTime
    if (props.location.pathname.includes('nba')) {
        allTime = props.allTime.nba
    } else if (props.location.pathname.includes('nhl')) {
        allTime = props.allTime.nhl
    } else if (props.location.pathname.includes('pga')) {
        allTime = props.allTime.pga
    } else {
        allTime = props.allTime.nba
    }
    return (
        <div className='list'>
            <div className='stat-head'>
                {
                    `${props.route.charAt(0).toUpperCase() + props.route.slice(1)} Top 
                ${props.match.path.replace('/', '').toUpperCase()} 
                Players of All Time`
                }
            </div>
            <div className='all-time'>
                <div className='cats-banner'></div>
                <PlayerListCat title="Rank" allTime={allTime} />
                <PlayerListCat onPlayerHover={props.onPlayerHover} title="Player" allTime={allTime} />
                <PlayerListCat title="Lists" allTime={allTime} />
                <PlayerListCat title="Avg." allTime={allTime} />
            </div>
            <div className='total-foot'>{`(${allTime.length})`}</div>
        </div>
    )
}

export default withRouter(PlayerList)
