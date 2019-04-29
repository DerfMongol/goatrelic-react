const express = require('express')
const router = express.Router()

const fileName = 'index.html'
const publicFolder = __dirname + '../../../public/'

router.get('nba', (req, res) => {
    res.sendFile(fileName, publicFolder, function (err) {
        if (err) {
          next(err);
        } else {
          console.log('Sent:', fileName);
        }
      });

})

router.get('nhl', (req, res) => {
    res.sendFile(fileName, publicFolder, function (err) {
        if (err) {
          next(err);
        } else {
          console.log('Sent:', fileName);
        }
      });

})

router.get('pga', (req, res) => {
    res.sendFile(fileName, publicFolder, function (err) {
        if (err) {
          next(err);
        } else {
          console.log('Sent:', fileName);
        }
      });

})

module.exports = router