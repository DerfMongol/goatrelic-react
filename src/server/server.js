const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const pga = require('./routes/api/pga')
const nba = require('./routes/api/nba')
const nhl = require('./routes/api/nhl')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = 4000

const uri = "mongodb+srv://Lee:Crusher79!@cluster0-efaxd.mongodb.net/test?retryWrites=true"
const options = {
    useNewUrlParser: true,
    dbName: 'critics'
}

mongoose.connect(uri, options)

app.use('/api/pga', pga)
app.use('/api/nba', nba)
app.use('/api/nhl', nhl)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// const client = new MongoClient(uri, { useNewUrlParser: true })

// let allTime = []

// client.connect(err => {
//     const collection = client.db("critics").collection("pga")
//     // collection.find({players: 'Harry Vardon'}).toArray((err, result) => {
//     //     if (err) {
//     //         throw err
//     //     }
//     //     console.log(result)
//     //     client.close()
//     // })
//     collection.find({})
//     .toArray()
//     .then((res) => {
//         res.forEach((critic, index1) => {
//             critic.players.forEach((player1, index2) => {
//                 if (index1 === 0) {
//                     allTime.push({ 
//                         player: player1,
//                         rank: index2 + 1,
//                         lists: 1,
//                         avg: null
//                      })
//                 }
//                 else if (index1 > 0) {
//                     allTime.some((player2, index3) =>{
//                         if (player1 === player2.player) {
//                             allTime[index3].rank += ( index2 + 1 )
//                             allTime[index3].lists++
//                             return true
//                         }
//                         else if (index3 === allTime.length - 1) {
//                             allTime.push({ 
//                                 player: player1,
//                                 rank: index2 + 1,
//                                 lists: 1,
//                                 avg: null
//                              })
//                         }
//                     })
//                 }
//             })
//         })
//         allTime.forEach((player,index4) => {
//             allTime[index4].avg = (player.rank / player.lists).toFixed(2)
//         })
//         console.log(allTime)
//         process.exit()
//     })
    
//     // collection.countDocuments({players: 'Harry Vardon'})
//     // .then(res => {
//     //     console.log(res)
//     // })
//     client.close()
    
// })






