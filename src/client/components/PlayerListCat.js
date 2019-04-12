import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const PlayerListCat = (props) => (
    <div className="cats">
        <div className="catshead">{props.title}</div>
        {
            props.allTime.map((player, index) => {
                if (props.title === "Rank") {
                    return <div key={player._id} className="player-list">{`${index + 1}. `}</div>
                }
                if (props.title === "Player") {
                    return <div key={player._id} className="player-list">{player.player}</div>
                }
                if (props.title === "Lists") {
                    return <div key={player._id} className="player-list">{player.lists}</div>
                }
                if (props.title === "Avg.") {
                    return <div key={player._id} className="player-list">{player.avg}</div>
                }

            })
        }

    </div>

)

const mapStateToProps = (state, props) => {

    if (props.match.path === '/nba') {
        return {
            allTime: state.allTime.nba, 
        }
    } else if (props.match.path === '/nhl') {
        return {
            allTime: state.allTime.nhl, 
        }
    } else if (props.match.path === '/pga') {
        return {
            allTime: state.allTime.pga, 
        }
    } else {
        return {
            allTime: state.allTime.nba
        }
        
    }
    
}


export default withRouter(connect(mapStateToProps)(PlayerListCat))
