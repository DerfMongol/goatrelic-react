const express = require('express')
const router = express.Router()

const Nba = require('../../models/Nba')

router.get('/', (req, res) => {
    Nba.find()
       .then(player => res.json(player))

})

module.exports = router