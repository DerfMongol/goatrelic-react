import React, { Component } from 'react'

class SportListInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sport: this.props.sport
        }
    }

    render() {
        let list;
        if (this.props.input !== '' && this.props.searchList) {
            list = this.state.sport
            .filter(player => this.props.input === '' || player.player.toLowerCase().includes(this.props.input.toLowerCase()))
            .map((player) =>
                <li key={player._id} onClick={() => this.props.listClick(player.player)}>
                    {player.player}
                </li>
            )
        }
        return (

            <div className="bottom-list">
                <input
                    type="text"
                    placeholder="Next Player"
                    onKeyDown={this.props.enterHandler}
                    value={this.props.input}
                    onChange={this.props.inputChange}
                />
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default SportListInput