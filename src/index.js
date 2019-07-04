import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

app.use('/api', proxy('https://salty-thicket-36195.herokuapp.com/', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'https://goatrelic.herokuapp.com'
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

