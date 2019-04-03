const express = require('express')
const router = express.Router()

const Nhl = require('../../models/Nhl')

router.get('/', (req, res) => {
    Nhl.find()
       .then(player => res.json(player))

})

module.exports = router