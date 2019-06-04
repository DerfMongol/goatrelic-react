import React from 'react'

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


export default PlayerListCat