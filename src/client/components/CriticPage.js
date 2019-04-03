import React from 'react'
import Header from './Header'
import TrophyCase from './TrophyCase'
import PlayerList from './PlayerList'
import CriticContainer from './CriticContainer';

export default class CriticPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <div className='content'>
                    <TrophyCase path={this.props.path} />
                    <PlayerList />
                    <CriticContainer />
                </div>
            </div>
        )
    }
}