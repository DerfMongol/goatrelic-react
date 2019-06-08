import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const ListHeader = ({ match }) => (
    <div className='list-header'> 
        <Link to={`${match.url}/critics`} className='list-header-title'>Critics</Link>
        <Link to={`${match.url}/players`} className='list-header-title'>Players</Link>
        <Link to={`${match.url}/fans`} className='list-header-title'>Fans</Link>
    </div>
)

// const mapStateToProps = ({ user }) => {
//     return { user }
// }

// export default connect(mapStateToProps)(ListHeader)
export default withRouter(ListHeader)