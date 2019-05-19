import React from 'react'
import { connect } from 'react-redux'

import requireAuth from '../components/hocs/requireAuth'

const ProfilePage = (props) => (
    <div className='container'>
        <h1 className='user'>
            {`Welcome ${props.user.username}`}
            {console.log(props.user)}
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