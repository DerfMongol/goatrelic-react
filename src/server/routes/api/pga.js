const express = require('express')
const router = express.Router()

const Pga = require('../../models/Pga')

router.get('/', (req, res) => {
    Pga.find()
       .then(player => res.json(player))

})

module.exports = router