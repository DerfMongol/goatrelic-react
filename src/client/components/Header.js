import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ user }) => {

    const authButton = user.data ? (
        <div className='auth'>
            <Link to="/profile">
                <img
                    src={user.data.thumbnail}
                    width="35"
                    height="35"
                />
            </Link>
            <div className="main-item">
                <a href="/api/auth/logout" >Logout</a>
            </div>
            


        </div>
    ) : (
            <div className='auth main-item'>
                <a href="/api/auth/google">Login</a>
            </div>

        )

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

            {authButton}

        </header>
    )
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps)(Header)