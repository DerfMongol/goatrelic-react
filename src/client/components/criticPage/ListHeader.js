import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const ListHeader = (props) => (
    <div className='list-header'> 
        <Link to={`${props.match.url}/critics`} onClick={() => props.onPathClick('critics')} className='list-header-title'>Critics</Link>
        <Link to={`${props.match.url}/players`} onClick={() => props.onPathClick('players')} className='list-header-title'>Players</Link>
        <Link to={`${props.match.url}/fans`} onClick={() => props.onPathClick('fans')} className='list-header-title'>Fans</Link>
    </div>
)

// const mapStateToProps = ({ user }) => {
//     return { user }
// }

// export default connect(mapStateToProps)(ListHeader)
export default withRouter(ListHeader)