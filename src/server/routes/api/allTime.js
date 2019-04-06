const express = require('express')
const router = express.Router()

const AllTime = require('../../models/AllTime')
// const Nhl = require('../../models/Nhl')
// const Pga = require('../../models/Pga')

router.get('/nba', (req, res) => {
    AllTime.Nba.find()
       .then(player => res.json(player))

})

router.get('/nhl', (req, res) => {
    AllTime.Nhl.find()
       .then(player => res.json(player))

})

router.get('/pga', (req, res) => {
    AllTime.Pga.find()
       .then(player => res.json(player))

})

module.exports = router