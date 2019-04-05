import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import CriticProfile from './CriticProfile'
import { connect } from 'react-redux'
import { getNba } from '../actions/critic-actions'

class CriticContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            nba: []
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         nba: this.props.nba
    //     })
    // }

    componentDidMount() {
        axios.get('http://localhost:4000/api/nba')
            .then((res) => {
                this.setState({
                    nba: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

    //   componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         nba: nextProps.nba
    //     })
    //   }
    render() {
        return (
            <div>
                <div className='stat-head'>Critics (#)</div>
                <div className='critic-list'>
                {
                    this.state.nba.map((critic, index) => (
                        <CriticProfile
                            key={critic._id}
                            name={critic.name}
                            job={critic.job}
                            date={critic.date}
                            players={critic.players}
                            url={critic.url}
                            pic={critic.pic}
                        />
                    ))
                }
                    {console.log(this.state.nba)}
                </div>
            </div>
        )
    }
}

// CriticContainer.propTypes = {
//     getNba: PropTypes.func.isRequired,
//     nba: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//     nba: state.critic.nba
// })

// export default connect(mapStateToProps, { getNba })(CriticContainer)

export default CriticContainer

