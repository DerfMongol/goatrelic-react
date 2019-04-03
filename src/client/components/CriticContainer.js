import React from 'react'
// import PropTypes from 'prop-types'
import CriticProfile from './CriticProfile'
// import { connect } from 'react-redux'
// import { getNba } from '../actions/critic-actions'

const CriticContainer = (props) => (
    <div>
        <div className='stat-head'>Critics (#)</div>
        <div className='critic-list'>
            <CriticProfile />
            <CriticProfile />
            
        </div>
    </div>
)
// nba={this.state.nba}
// CriticContainer.propTypes = {
//     getNba: PropTypes.func.isRequired,
//     nba: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     nba: state.nba.name
// })

// export default connect(mapStateToProps, { getNba })(CriticContainer)

export default CriticContainer
