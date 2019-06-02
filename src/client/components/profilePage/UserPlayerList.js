import React, { Component } from 'react'

class UserPlayerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index
        }
    }

    componentDidMount() {
        this.setState({
            index: this.props.index
        })
    }

    render() {
        return (
            <ul>
                {
                    this.props.userData.map((player, index) =>
                        <div
                            className="player-container"
                            key={index}
                        >

                            {
                                index === this.props.index ?
                                    <li>{this.props.SportListInput}</li> :
                                    <li
                                        className="player-user-list"
                                        onClick={() => this.props.onClick(index)}
                                    >
                                        {`${index + 1}. ${player}`}
                                    </li>
                            }

                            <button className="delete-player" onClick={() => this.props.deleteButton(index)}>x</button>
                        </div>
                    )

                }
            </ul>
        )
    }
}

export default UserPlayerList