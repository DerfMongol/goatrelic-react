import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const ListHeader = (props) => (
    <div className='list-header'>


        <nav className='main'>
            <ul className='main-items'>
                <li>
                    <NavLink 
                        to={`${props.match.url}/critics`} 
                        className='list-header-title' 
                        activeClassName='list-header-active' 
                        onClick={() => props.onPathClick('critics')}>Critics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={`${props.match.url}/players`} 
                        className='list-header-title' 
                        activeClassName='list-header-active' 
                        onClick={() => props.onPathClick('players')}>Players
                    </NavLink>

                </li>
                <li>
                    <NavLink 
                        to={`${props.match.url}/fans`} 
                        className='list-header-title' 
                        activeClassName='list-header-active' 
                        onClick={() => props.onPathClick('fans')}>Fans
                    </NavLink>

                </li>
            </ul>
        </nav>

    </div>
)

// const mapStateToProps = ({ user }) => {
//     return { user }
// }

// export default connect(mapStateToProps)(ListHeader)
export default withRouter(ListHeader)