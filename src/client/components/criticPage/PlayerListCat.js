import React from 'react'

const PlayerListCat = (props) => (
    <div className="cats">
        <div className="catshead">{props.title}</div>
        {
            props.allTime.map((player, index) => {
                
                if (props.title === "Rank") {
                    if (index > 0) {
                        let count = index
                        while(count > 0 && props.allTime[count - 1].lists === player.lists && props.allTime[count - 1].avg === player.avg ) {
                            count--
                        }
                        if (count !== index) {
                            return <div key={index} className="player-list">{`${count + 1}.`}</div>
                        }
                        
                    }
                    return <div key={index} className="player-list">{`${index + 1}.`}</div>
                       
                }
                if (props.title === "Player") {
                    return <div key={index} className="player-list">{player.player}</div>
                }
                if (props.title === "Lists") {
                    return <div key={index} className="player-list">{player.lists}</div>
                }
                if (props.title === "Avg.") {
                    return <div key={index} className="player-list">{player.avg}</div>
                }

            })
        }
    </div>
)


export default PlayerListCat