import React from 'react'
// import { Provider } from 'react-redux'

import CriticPage from './CriticPage'

// import store from './store'

export default class GoatrelicApp extends React.Component {
    render() {
        return (
            // <Provider store={ store }>
                <CriticPage />
            // </Provider>
        )
    }
}