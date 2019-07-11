import React from 'react'
import { withRouter } from 'react-router'

import CriticProfile from './CriticProfile'

const CriticContainer = (props) => {
    let profiles
    if (props.match.path.includes('/nba')) {
        profiles = props.profiles.nba
    } else if (props.match.path.includes('/nhl')) {
        profiles = props.profiles.nhl
    } else if (props.match.path.includes('/pga')) {
        profiles = props.profiles.pga
    } else {
        profiles = props.profiles.nba
    }

    return (
        <div>
            <div className='stat-head'>{`${props.route.charAt(0).toUpperCase() + props.route.slice(1)}  (${profiles.length})`}</div>
            <div className='critic-list'>
                {
                    profiles
                        .sort((a, b) => b.players.length - a.players.length)
                        .map((profile, index) => (
                            <CriticProfile
                                key={profile._id}
                                name={profile.name}
                                job={profile.job}
                                date={profile.date}
                                players={profile.players}
                                url={profile.url}
                                pic={profile.pic}
                                router={props.route}
                            />
                        ))
                }
            </div>
        </div>
    )

}

export default withRouter(CriticContainer)