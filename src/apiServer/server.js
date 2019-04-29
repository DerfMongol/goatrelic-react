const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')


const critic = require('./routes/api/critics')
// const criticNba = require('./routes/api/critics')
// const criticNhl = require('./routes/api/critics')

const allTime = require('./routes/api/allTime')
// const allTimeNba = require('./routes/api/allTime')
// const allTimeNhl = require('./routes/api/allTime')

const reactRouter = require('./routes/reactRouter')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

const port = 4000

// const uri = "mongodb+srv://Lee:Crusher79!@cluster0-efaxd.mongodb.net/test?retryWrites=true"
// const options = {
//     useNewUrlParser: true,
//     dbName: 'critics'
// }

// mongoose.connect(uri, options)


app.use('/api/critics', critic)
// app.use('/api/critics/nba', criticNba)
// app.use('/api/critics/nhl', criticNhl)

// const options2 = {
//     useNewUrlParser: true,
//     dbName: 'allTime'
// }

// mongoose.connect(uri, options2)

app.use('/api/allTime', allTime)
// app.use('/api/allTime/nba', allTimeNba)
// app.use('/api/allTime/nhl', allTimeNhl)


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






