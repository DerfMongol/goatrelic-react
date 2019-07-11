import React from 'react'

import Start from './Start'
import Home from './pages/Home'
import CriticPage from './pages/CriticPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

export default [
    {
        ...Start,
        routes: [
            {
                ...CriticPage,
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
