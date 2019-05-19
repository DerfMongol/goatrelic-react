import React from 'react'

import App from './App'
import CriticPage from './pages/CriticPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

export default [
    {
        ...App,
        routes: [
            {
                ...CriticPage,
                path: '/',
                exact: true
            },
            {
                ...CriticPage,
                path: '/nba',
            },
            {
                ...CriticPage,
                path: '/nhl',
            },
            {
                ...CriticPage,
                path: '/pga',
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
