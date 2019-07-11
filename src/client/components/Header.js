import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const authButton = this.props.user.data ? (
            <div className='auth'>
                <Link to="/profile">
                    <img src={this.props.user.data.thumbnail} />
                </Link>
                <div className='log-padding'>
                    <a href="/api/auth/logout" >Logout</a>
                </div>



            </div>) :
            (
                <div className='auth'>
                    <div className='log-padding'>
                        <a href="/api/auth/google">Login</a>
                    </div>
                </div>

            )
        let subRoute
        if (this.props.location.pathname.includes('critics')) {
            subRoute = 'critics'
        } else if (this.props.location.pathname.includes('players')) {
            subRoute = 'players'
        } else if (this.props.location.pathname.includes('fans')) {
            subRoute = 'fans'
        } else {
            subRoute = 'critics'
        }
        const phoneMenu = this.props.phoneMenu ? (
            <nav className="mobile-nav">
                <ul className="mobile-nav__items">
                    <Link to="/">
                        <img className="goat-mobile" src={require("../../../public/images/Black_Goat.png")} />
                    </Link>
                    <li>
                        <NavLink to={`/nba/${subRoute}`} className="mobile-nav__item-link" activeClassName="active-mobile" onClick={this.props.mobileSportClick}>NBA</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/nhl/${subRoute}`} className="mobile-nav__item-link" activeClassName="active-mobile" onClick={this.props.mobileSportClick}>NHL</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/pga/${subRoute}`} className="mobile-nav__item-link" activeClassName="active-mobile" onClick={this.props.mobileSportClick}>PGA</NavLink>
                    </li>
                </ul>
            </nav>) : null


        return (
            <div>
                {phoneMenu}
                <header className='header'>
                    <button className='toggle-button' onClick={this.props.phoneMenuClick}>
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
            </div>

        )
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default withRouter(connect(mapStateToProps)(Header))