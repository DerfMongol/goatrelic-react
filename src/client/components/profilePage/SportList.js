import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postSportList } from '../../actions/user-actions'
import SportListInput from './SportListInput'

class SportList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sport: this.props.sports,
            input: '',
            searchList: null
        }
        this.inputChange = this.inputChange.bind(this)
        this.deleteClickHandler = this.deleteClickHandler.bind(this)
        this.listClick = this.listClick.bind(this)
        this.enterHandler = this.enterHandler.bind(this)
    }

    componentDidMount() {
        this.setState({
            input: ''
        })
    }

    enterHandler(e) {
        let index = this.props.sport.length
        let value = e.target.value

        if (e.key === 'Enter') {
            e.preventDefault()
            this.props.sports[index] = value
            this.props.sportList(this.props.user)
            this.setState({
                sport: this.props.sports,
                input: ''
            })
        }
    }

    inputChange(e) {
        this.setState({
            input: e.target.value,
            searchList: true
        })   
    }

    deleteClickHandler(index) {
        this.props.sports.splice(index, 1)
        this.props.sportList(this.props.user)
        this.setState({
            sport: this.props.sports
        })
    }

    listClick(player) {
        let index = this.props.sport.length
        this.props.sport[index] = player
        this.props.sportList(this.props.user)
        this.setState({
            input: '', 
            searchList: null
        }) 
    }

    render() {
        return (
            <div className="list-container">
                <div className="title-list">{this.props.title}</div>
                <ul>
                    {
                        this.props.sports.map((player, index) =>
                            <div className="player-container" key={index}>
                                <li>
                                    {`${index + 1}. ${player}`}
                                </li>
                                <button className="delete-player" onClick={() => this.deleteClickHandler(index)}>x</button>
                            </div>
                        )
                    }
                </ul>
                <SportListInput 
                    sport={this.props.players}
                    input={this.state.input} 
                    inputChange={this.inputChange}
                    listClick={this.listClick}
                    enterHandler={this.enterHandler}
                    searchList={this.state.searchList}
                 />
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    let sports;
    let players;
    if (props.title === 'NBA') {

        sports = state.user.data.nba
        players = state.allTime.nba

    } else if (props.title === 'NHL') {

        sports = state.user.data.nhl
        players = state.allTime.nhl

    } else if (props.title === 'PGA') {

        sports = state.user.data.pga
        players = state.allTime.pga
    }

    return {
        user: state.user.data,
        players,
        sports

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sportList: (data) => { dispatch(postSportList(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SportList)