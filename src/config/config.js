let config = {}

if (process.env.NODE_ENV == 'development') {
    config = {
        frontDomain: 'localhost:3000',
        backDomain: 'localhost:3001'
    }
} else if (process.env.NODE_ENV == 'production') {
    config = {
        frontDomain: 'goatrelic.herokuapp.com',
        backDomain: 'salty-thicket-36195.herokuapp.com'
    }

}

export default config