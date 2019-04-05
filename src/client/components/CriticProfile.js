import React from 'react'

const CriticProfile = (props) => (
    <div className='critic-profile'>
        <div className='critic-name'>{props.name}</div>
        <div className='critic-info'>{props.job}</div>
        {
            props.players.slice(0, 10).map((player, index) => 
                <div
                    key={index}
                    className='critic-stats'>
                    {`${index + 1}. ${player}`}
                </div>
            )
        }

        <div className='critic-foot'>
            {props.date}
            <a className='web-link' href={props.url}>Source</a>
        </div>
    </div>

)

export default CriticProfile