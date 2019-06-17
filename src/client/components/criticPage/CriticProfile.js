import React, { Component } from 'react'

const CriticProfile = (props) =>

    (
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
            {props.players.length > 10 ?
                <div>
                    <div className='critic-stats'>...</div>
                    <div className='critic-stats'>{`(${props.players.length})`}</div>
                </div>
                : null
            }

            <div className='critic-foot'>
                {props.date}
                <a className='web-link' href={props.url}>Source</a>
            </div>
        </div>
    )






export default CriticProfile