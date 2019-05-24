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
                <SportList sport={props.user.nba} title="NBA" />
                <SportList sport={props.user.nhl} title="NHL"/>
                <SportList sport={props.user.pga} title="PGA"/>
            </div>

        </h1>
    </div>
)

const mapStateToProps = (state) => {
    return {
        user: state.user.data
    }
}

export default {
    component: connect(mapStateToProps)(requireAuth(ProfilePage))
}