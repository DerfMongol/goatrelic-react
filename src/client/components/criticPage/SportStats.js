import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import TrophyCase from './TrophyCase'
import PlayerList from './PlayerList'
import CriticContainer from './CriticContainer'

class SportStats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player: null
        }
    this.onPlayerHover = this.onPlayerHover.bind(this)
    }
    onPlayerHover(player) {
        this.setState({
            player
        })
    }
    render() {
        return (
            <div>
                <TrophyCase player={this.state.player}/>
                <PlayerList onPlayerHover={this.onPlayerHover} route={this.props.route} allTime={this.props.allTime} />
                <CriticContainer profiles={this.props.profiles} route={this.props.route} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    if (ownProps.route === 'critics') {
        return {
            profiles: state.critics,
            allTime: state.allTime
        }
    } else if (ownProps.route === 'players') {
        return {
            profiles: state.players,
            allTime: state.playersAllTime
        }
    } else if (ownProps.route === 'fans') {
        return {
            profiles: state.fans,
            allTime: state.fansAllTime
        }
    } else {
        return {
            profiles: state.critics,
            allTime: state.allTime
        }

    }

}

export default withRouter(connect(mapStateToProps)(SportStats))