import React from 'react'
import { connect } from 'react-redux'

import requireAuth from '../components/hocs/requireAuth'
import SportList from '../components/profilePage/SportList'

const ProfilePage = (props) => (
    <div className='container'>
        <h1 className='user'>
            {`Welcome ${props.user.username}`}
            <div>Create your Goat Lists</div>
            {console.log(props.user)}
            <div className="lists-container">
                <SportList user={props.user} userPlayers={props.user.nba} criticPlayers={props.allTime.nba} title="NBA" />
                <SportList user={props.user} userPlayers={props.user.nhl} criticPlayers={props.allTime.nhl} title="NHL"/>
                <SportList user={props.user} userPlayers={props.user.pga} criticPlayers={props.allTime.pga} title="PGA"/>
            </div>

        </h1>
    </div>
)

const mapStateToProps = (state) => {
    return {
        user: state.user.data,
        allTime: state.allTime
    }
}

export default {
    component: connect(mapStateToProps)(requireAuth(ProfilePage))
}