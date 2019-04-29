import React from 'react'
import CriticPage from './pages/CriticPage'

export default [
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
    }
]
