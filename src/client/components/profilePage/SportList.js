import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postSportList } from '../../actions/user-actions'
import SportListInput from './SportListInput'
import UserPlayerList from './UserPlayerList'

class SportList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sport: this.props.userPlayers,
            input: '',
            searchList: null,
            spellCheck: true,
            repeat: false,
            playerClick: true,
            index: null
        }
        this.inputChange = this.inputChange.bind(this)
        this.deleteClickHandler = this.deleteClickHandler.bind(this)
        this.listClick = this.listClick.bind(this)
        this.enterHandler = this.enterHandler.bind(this)
        this.playerClickHandler = this.playerClickHandler.bind(this)
    }

    componentDidMount() {
        this.setState({
            input: ''
        })
    }

    enterHandler(e) {
        let index;
        if (this.state.index === null) {
            index = this.props.userPlayers.length
        } else {
            index = this.state.index
        }

        let value = e.target.value

        if (e.key === 'Enter') {
            e.preventDefault()
            const check = this.props.criticPlayers
                .filter(player => player.player === value)
            const repeat = this.props.userPlayers
                .filter(player => player === value)
            if (check.length > 0 && repeat.length === 0) {
                this.props.userPlayers[index] = value
                this.props.sportList(this.props.user)
                this.setState({
                    sport: this.props.userPlayers,
                    input: '',
                    spellCheck: true,
                    repeat: false,
                    playerClick: true,
                    index: null
                })
            }

            if (check.length === 0) {
                this.setState({
                    spellCheck: false,
                    input: ''
                })
            }

            if (repeat.length > 0) {
                this.setState({
                    repeat: true,
                    input: ''
                })
            }

        }
        if (e.key === 'Escape') {
            this.setState({
                index: null,
                playerClick: true
            })
        }
    }

    inputChange(e) {
        this.setState({
            input: e.target.value,
            searchList: true,
            spellCheck: true,
            repeat: false
        })
    }

    deleteClickHandler(index) {
        this.props.userPlayers.splice(index, 1)
        this.props.sportList(this.props.user)
        this.setState({
            sport: this.props.userPlayers,
            index: null,
            playerClick: true
        })
    }

    listClick(player) {
        let index
        if (this.state.index === null) {
            index = this.props.userPlayers.length
        } else {
            index = this.state.index
        }

        const repeat = this.props.userPlayers
            .filter(x => x === player)
        if (repeat.length === 0) {
            this.props.userPlayers[index] = player
            this.props.sportList(this.props.user)
            this.setState({
                input: '',
                searchList: null,
                repeat: false,
                playerClick: true,
                index: null
            })
        } else {
            this.setState({
                repeat: true,
                input: ''
            })
        }
    }

    playerClickHandler(index) {

        this.setState({
            playerClick: false,
            index
        })
    }

    render() {
        let sportListInput =
            <SportListInput
                sport={this.props.criticPlayers}
                input={this.state.input}
                inputChange={this.inputChange}
                listClick={this.listClick}
                enterHandler={this.enterHandler}
                searchList={this.state.searchList}
                spellCheck={this.state.spellCheck}
                sportName={this.props.title}
                repeat={this.state.repeat}
                userData={this.props.userPlayers}
            />
        return (
            <div className="list-container">
                <div className="title-list">{this.props.title}</div>
                <UserPlayerList
                    userData={this.props.userPlayers}
                    deleteButton={this.deleteClickHandler}
                    onClick={this.playerClickHandler}
                    SportListInput={sportListInput}
                    playerClick={this.state.playerClick}
                    index={this.state.index}
                />
                {this.state.playerClick ? sportListInput : null}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sportList: (data) => { dispatch(postSportList(data)) }
    }
}

export default connect(null, mapDispatchToProps)(SportList)