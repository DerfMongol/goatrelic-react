const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const uri = "mongodb+srv://Lee:Crusher79!@cluster0-efaxd.mongodb.net/test?retryWrites=true"
const options = {
    useNewUrlParser: true,
    dbName: 'allTime'
}

const AllTimeConn = mongoose.createConnection(uri, options)

const nbaSchema = new Schema({ url: String, text: String, id: Number}, { collection: 'nba'})
const nhlSchema = new Schema({ url: String, text: String, id: Number}, { collection: 'nhl'})
const pgaSchema = new Schema({ url: String, text: String, id: Number}, { collection: 'pga'})

module.exports = {
    Pga: AllTimeConn.model('pga', pgaSchema),
    Nhl: AllTimeConn.model('nhl', nhlSchema),
    Nba: AllTimeConn.model('nba', nbaSchema)
} 