import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import axios from 'axios'

import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

if (process.env.NODE_ENV == 'production') {
    setInterval(() => {
        axios.get("http://salty-thicket-36195.herokuapp.com");
    }, 300000); // every 5 minutes (300000)
}

console.log(process.env.API_URL)
console.log(process.env.SSR_URL)

app.use('/api', proxy(`http://${process.env.API_URL}`, {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = process.env.SSR_URL
        return opts
    }
}))

app.use(express.static('public'))

app.get('*', (req, res) => {
    const store = createStore(req)
    const promises = matchRoutes(Routes, req.path).map(({ route, match }) => {
        return route.loadData ? route.loadData(store) : null
    }).map(promise => {
        if (promise) {
            return new Promise((res, rej) => {
                promise.then(res).catch(res)
            })
        }
    })

    Promise.all(promises).then(() => {
        const context = {}
        const content = renderer(req, store, context)
        
        if (context.url) {
            return res.redirect(303, context.url)
        }
        if (context.notFound) {
            res.status(404)
        }

        res.send(content)
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000')
})

