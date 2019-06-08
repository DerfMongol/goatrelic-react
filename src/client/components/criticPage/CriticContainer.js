import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import CriticProfile from './CriticProfile'

const CriticContainer = (props) => (
    <div>
        <div className='stat-head'>{`Critics (${props.critics.length})`}</div>
        <div className='critic-list'>
            {
                props.critics
                    .sort((a, b) => b.players.length - a.players.length)
                    .map((critic, index) => (
                        <CriticProfile
                            key={critic._id}
                            name={critic.name}
                            job={critic.job}
                            date={critic.date}
                            players={critic.players}
                            url={critic.url}
                            pic={critic.pic}
                        />
                    ))
            }
        </div>
    </div>
)

const mapStateToProps = (state, props) => {

    if (props.match.path.includes('/nba')) {
        return {
            critics: state.critics.nba
        }
    } else if (props.match.path.includes('/nhl')) {
        return {
            critics: state.critics.nhl
        }
    } else if (props.match.path.includes('/pga')) {
        return {
            critics: state.critics.pga
        }
    } else {
        return {
            critics: state.critics.nba
        }

    }

}

export default withRouter(connect(mapStateToProps)(CriticContainer))