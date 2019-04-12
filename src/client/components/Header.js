import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => (

    <header className='header'>
        <button className='toggle-button'>
            <span className='toggle-button__bar'></span>
            <span className='toggle-button__bar'></span>
            <span className='toggle-button__bar'></span>
        </button>
        <div className='goat'></div>
        <div className='logo'>
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
    </header>
)

export default Header