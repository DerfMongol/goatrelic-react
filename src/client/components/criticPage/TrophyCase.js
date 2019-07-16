import React from 'react'

const TrophyCase = (props) => {
    
    let player
    let style 
    let render
    console.log(props.player)
    if (props.player !== null) {
        player =  props.player.replace(/\s+/g, '-') 
        console.log(player)
        style = {
            backgroundImage: `url('../images/${player}.png')`
        }
        render = <div className='player-headshot' style={style}></div>
    } else {
        render = <div></div>
    }

    return (
        <div className='trophies'>
            {render}
        </div>
    )

}

export default TrophyCase