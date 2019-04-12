import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '../store'
import CriticPage from './CriticPage'

export default class GoatrelicApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={CriticPage} />
                    <Route path="/nba" component={CriticPage}  />
                    <Route path="/nhl" component={CriticPage}  />
                    <Route path="/pga" component={CriticPage}  />
                </Router>
            </Provider>

        )
    }
}

