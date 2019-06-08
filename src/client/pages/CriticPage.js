import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import {withRouter } from 'react-router-dom'

import ListHeader from '../components/criticPage/ListHeader'

const CriticPage = ({ route }) => {
    
        return (
            <div>
                <div className='container'>
                    <div className='content'>
                        <ListHeader />
                        {renderRoutes(route.routes)}
                    </div>
                </div>
            </div>
    
        )
    }

export default {
    component: withRouter(CriticPage) 
}