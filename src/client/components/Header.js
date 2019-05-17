import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ user }) => {

    const authButton = user ? (
        <a href="/api/auth/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    )

    return (
        <header className='header'>
            <button className='toggle-button'>
                <span className='toggle-button__bar'></span>
                <span className='toggle-button__bar'></span>
                <span className='toggle-button__bar'></span>
            </button>
            <div className='logo'>
                <div className='goat'></div>
                <div className='brand'>Relic</div>
            </div>
            <nav className='main'>
                <ul className='main-items'>
                    <li className='main-item dropdown'>
                        <Link to="/nba" className="dropbtn">NBA</Link>
                    </li>
                    <li className='main-item dropdown'>
                        <Link to="/nhl" className="dropbtn">NHL</Link>
                    </li>
                    <li className='main-item dropdown'>
                        <Link to="/pga" className="dropbtn">PGA</Link>
                    </li>
                </ul>
            </nav>
            <div className='main-item auth'>
                {authButton}
            </div>
        </header>
    )
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps)(Header)