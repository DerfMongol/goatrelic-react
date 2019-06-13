import React, { Component } from 'react'

class CriticProfile extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.increment
    }
    render() {
        return (
            <div className='critic-profile'>
                <div className='critic-name'>{this.props.name}</div>
                <div className='critic-info'>{this.props.job}</div>
                {
                    this.props.players.slice(0, 10).map((player, index) =>
                        <div
                            key={index}
                            className='critic-stats'>
                            {`${index + 1}. ${player}`}
                        </div>
                    )
                }
                <div className='critic-stats'>...</div>
                <div className='critic-stats'>{`(${this.props.players.length})`}</div>
                <div className='critic-foot'>
                    {this.props.date}
                    <a className='web-link' href={this.props.url}>Source</a>
                </div>
            </div>
        )
    }
}




export default CriticProfile