import React, { Component } from 'react'

class SportListInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sport: this.props.sport,
            userData: this.props.userData
        }
    }

    render() {
        let list;
        let filteredList = this.state.sport
            .filter(player =>
                this.props.input === '' ||
                player.player.toLowerCase().includes(this.props.input.toLowerCase()) &&
                player.player[0].toLowerCase() === this.props.input[0].toLowerCase() &&
                !this.state.userData.includes(player.player))
        if (this.props.input !== '' && this.props.searchList) {
            list = filteredList
                .sort((a, b) => a.player.localeCompare(b.player))
                .map((player, index) =>
                    <li
                        key={index}
                        className={this.props.cursor === index ? 'active' : null}
                        onClick={() => this.props.listClick(player.player)}>
                        
                        {player.player}
                    </li>
                )
        }

        if (!this.props.spellCheck) {
            list = <div className='error'>{`That is not a ${this.props.sportName} athlete`}</div>
        }
        if (this.props.repeat) {
            list = <div className='error'>Player is already in your list</div>
        }
        return (

            <div className="bottom-list">
                <input
                    autoFocus
                    type="text"
                    placeholder={`Type ${this.props.sportName} player`}
                    onKeyDown={(e) => this.props.enterHandler(e, filteredList)}
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