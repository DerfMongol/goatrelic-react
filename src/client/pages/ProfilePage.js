import React from 'react'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions/user-actions'

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

const loadData = (store) => {
    return (
        store.dispatch(fetchCurrentUser())
    )
}

export default {
    component: connect(mapStateToProps)(ProfilePage),
    loadData
}