import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Header = (props) => {

    const authButton = props.user.data ? (
        <div className='auth'>
            <Link to="/profile">
                <img src={props.user.data.thumbnail}/>
            </Link>
            <div className='log-padding'>
                <a href="/api/auth/logout" >Logout</a>
            </div>



        </div>
    ) : (
            <div className='auth'>
                <div className='log-padding'>
                    <a href="/api/auth/google">Login</a>
                </div>
            </div>

        )

        let subRoute
        if (props.location.pathname.includes('critics')) {
            subRoute = 'critics'
        } else if (props.location.pathname.includes('players')) {
            subRoute = 'players'
        } else if (props.location.pathname.includes('fans')) {
            subRoute = 'fans'
        } else {
            subRoute = 'critics'
        }

    return (
        <header className='header'>
            <button className='toggle-button'>
                <span className='toggle-button__bar'></span>
                <span className='toggle-button__bar'></span>
                <span className='toggle-button__bar'></span>
            </button>
            <Link to="/" className='logo'>
                <img className="goat" src={require("../../../public/images/Black_Goat.png")} />
                <div className='brand'>Relic</div>
            </Link>
            <nav className='main'>
                <ul className='main-items'>
                    <li className='main-item dropdown'>
                        <NavLink to={`/nba/${subRoute}`} className="dropbtn" activeClassName="active">NBA</NavLink>
                    </li>
                    <li className='main-item dropdown'>
                        <NavLink to={`/nhl/${subRoute}`} className="dropbtn" activeClassName="active">NHL</NavLink>
                    </li>
                    <li className='main-item dropdown'>
                        <NavLink to={`/pga/${subRoute}`} className="dropbtn" activeClassName="active">PGA</NavLink>
                    </li>
                </ul>
            </nav>

            {authButton}

        </header>
    )
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default withRouter(connect(mapStateToProps)(Header))