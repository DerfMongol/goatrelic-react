import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postSportList } from '../../actions/user-actions'

class SportList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sport: this.props.sports,
            inputValue: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }

    onChange(e) {
        let index = this.props.sport.length
        let value = e.target.value

        if (e.key === 'Enter') {
            e.preventDefault()
            this.props.sports[index] = value
            this.props.sportList(this.props.user)
            this.setState({
                sport: this.props.sports,
                inputValue: ''
            })
        }
    }

    onInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    clickHandler(index) {
        this.props.sports.splice(index, 1)
        this.props.sportList(this.props.user)
        this.setState({
            sport: this.props.sports
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
                                <button className="delete-player" onClick={() => this.clickHandler(index)}>x</button>
                            </div>
                        )
                    }
                </ul>
                <div className="bottom-list">
                    <input
                        type="text"
                        placeholder="Next Player"
                        onKeyDown={this.onChange}
                        value={this.state.inputValue}
                        onChange={this.onInputChange}
                    />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    let sports;
    if (props.title === 'NBA') {

        sports = state.user.data.nba

    } else if (props.title === 'NHL') {

        sports = state.user.data.nhl

    } else if (props.title === 'PGA') {

        sports = state.user.data.pga
    }

    return {
        user: state.user.data,
        sports

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sportList: (data) => { dispatch(postSportList(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SportList)