import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import CriticProfile from './CriticProfile'

const CriticContainer = (props) => (
    <div>
        <div className='stat-head'>Critics</div>
        <div className='critic-list'>
            {
                props.critics.map((critic, index) => (
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

    if (props.match.path === '/nba') {
        return {
            critics: state.critic.nba
        }
    } else if (props.match.path === '/nhl') {
        return {
            critics: state.critic.nhl
        }
    } else if (props.match.path === '/pga') {
        return {
            critics: state.critic.pga
        }
    } else {
        return {
            critics: state.critic.nba
        }

    }

}

export default withRouter(connect(mapStateToProps)(CriticContainer))