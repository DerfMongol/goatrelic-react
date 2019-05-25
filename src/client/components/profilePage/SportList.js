import React, { Component } from 'react'
import { connect } from 'react-redux'

import { postSportList } from '../../actions/user-actions'

class SportList extends Component {
    constructor() {
        super()
        this.onChange = this.onChange.bind(this)
    }
    onChange(value, index) {
        if (this.props.title === 'NBA') {
            this.props.user.nba[index] = value
        } else if (this.props.title === 'NHL') {
            this.props.user.nhl[index] = value
        } else if (this.props.title === 'PGA') {
            this.props.user.pga[index] = value
        }
    }
    render() {
        let players;
        if (this.props.sport.length === 0) {
            players = [...Array(10)]
        } else {
            let diff = [...Array(10 - this.props.sport.length)]
            players = this.props.sport.concat(diff)
        }
        return (
            <div className="list-container">
                <div>{this.props.title}</div>
                {
                    players.map((player, index) =>
                        <input
                            key={index}
                            type="text"
                            placeholder={`${index + 1}.`}
                            defaultValue={player}
                            onKeyUp={(e) => { this.onChange(e.target.value, index) }}
                        />
                    )
                }
                <button onClick={() => { this.props.sportList(this.props.user) }}>SAVE</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sportList: (data) => { dispatch(postSportList(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SportList)