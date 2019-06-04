import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import PlayerListCat from './PlayerListCat'

const PlayerList = (props) => (
    <div className='list'>
        <div className='stat-head'>
            {
                `Critics Top 
                ${props.match.path.replace('/', '').toUpperCase()} 
                Players of All Time`
            }
        </div>
        <div className='all-time'>
            <div className='cats-banner'></div>
            <PlayerListCat title="Rank" allTime={props.allTime} />
            <PlayerListCat title="Player" allTime={props.allTime} />
            <PlayerListCat title="Lists" allTime={props.allTime} />
            <PlayerListCat title="Avg." allTime={props.allTime} />
        </div>
        <div className='total-foot'>{`(${props.allTime.length})`}</div>
    </div>
)

const mapStateToProps = (state, props) => {

    if (props.match.path === '/nba') {
        return {
            allTime: state.allTime.nba
        }
    } else if (props.match.path === '/nhl') {
        return {
            allTime: state.allTime.nhl
        }
    } else if (props.match.path === '/pga') {
        return {
            allTime: state.allTime.pga
        }
    } else {
        return {
            allTime: state.allTime.nba
        }

    }

}


export default withRouter(connect(mapStateToProps)(PlayerList))
