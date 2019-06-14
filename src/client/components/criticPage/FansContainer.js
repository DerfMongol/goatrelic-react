import React, { Component } from 'react'
import { withRouter } from 'react-router'

import CriticProfile from './CriticProfile'

class FansContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileSize: 0
        }
        this.profileSizeHandler = this.profileSizeHandler.bind(this)
    }
    
    profileSizeHandler(count) {
        this.setState({
            profileSize: count
        })
    }
    render() {
        let count = 0
        return (
            <div>
                <div className='stat-head'>{`Fans (${this.state.profileSize})`}</div>
                <div className='critic-list'>
                
                    {
                        
                        this.props.profiles
                            .sort((a, b) => {
                                if (this.props.match.path.includes('/nba')) {
                                    b.nba.length - a.nba.length
                                } else if (this.props.match.path.includes('/nhl')) {
                                    b.nhl.length - a.nhl.length
                                } else if (this.props.match.path.includes('/pga')) {
                                    b.pga.length - a.pga.length
                                }
                            })
                            .map((profile, index) => {
                                let players
                                
                                if (this.props.match.path.includes('/nba')) {
                                    players = profile.nba
                                } else if (this.props.match.path.includes('/nhl')) {
                                    players = profile.nhl
                                } else if (this.props.match.path.includes('/pga')) {
                                    players = profile.pga
                                }
                                if (players.length > 0) {
                                    count++
                                    
                                    
                                    return <CriticProfile
                                        key={profile._id}
                                        name={profile.username}
                                
                                        // job={profile.job}
                                        // date={profile.date}
                                        players={players}
                                        // url={profile.url}
                                        pic={profile.thumbnail}
                                    />
                                } else {
                                    return null
                                }

                            })
                    }
                    {this.profileSizeHandler(count)}
                </div>
            </div>
        )
    }
}

export default withRouter(FansContainer)