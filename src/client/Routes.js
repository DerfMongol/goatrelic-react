import React from 'react'

import App from './App'
import Home from './pages/Home'
import CriticPage from './pages/CriticPage'
import SportStats from './components/criticPage/SportStats'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                exact: true,
                path: '/'
            },
            {
                ...CriticPage,
                path: ['/nba', '/nba/critics', '/nba/players', '/nba/fans',
                '/nhl', '/nhl/critics', '/nhl/players', '/nhl/fans', '/pga',
                '/pga/critics', '/pga/players', '/pga/fans']
            },
            {
                ...ProfilePage,
                path: '/profile'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]
