import React from 'react'
import { withRouter } from 'react-router'

import CriticProfile from './CriticProfile'

const FansContainer = (props) => {
    return (
        <div>
            <div className='stat-head'>{`Critics (${props.profiles.length})`}</div>
            <div className='critic-list'>
                {
                    props.profiles
                        .sort((a, b) => {
                            if (props.match.path.includes('/nba')) {
                                b.nba.length - a.nba.length
                            } else if (props.match.path.includes('/nhl')) {
                                b.nhl.length - a.nhl.length
                            } else if (props.match.path.includes('/pga')) {
                                b.pga.length - a.pga.length
                            }
                        })
                        .map((profile, index) => {
                            let players
                            if (props.match.path.includes('/nba')) {
                                players = profile.nba
                            } else if (props.match.path.includes('/nhl')) {
                                players = profile.nhl
                            } else if (props.match.path.includes('/pga')) {
                                players = profile.pga
                            }
                            return <CriticProfile
                                key={profile._id}
                                name={profile.username}
                                // job={profile.job}
                                // date={profile.date}
                                players={players}
                                // url={profile.url}
                                pic={profile.thumbnail}
                            />
                        })
                }
            </div>
        </div>

    )}

export default withRouter(FansContainer)