import React from 'react'

const Header = (props) => (

    <header className='header'>
        <link href="https://fonts.googleapis.com/css?family=Titan+One" rel="stylesheet"></link>
        <button className='toggle-button'>
            <span className='toggle-button__bar'></span>
            <span className='toggle-button__bar'></span>
            <span className='toggle-button__bar'></span>
        </button>
        <div className='goat'></div>
        <div className='logo'>
            <div className='brand'>Relic</div>
        </div>
        {/* <nav className='main'>
          
          </nav> */}
    </header>
)

export default Header