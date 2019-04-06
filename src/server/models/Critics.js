const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const uri = "mongodb+srv://Lee:Crusher79!@cluster0-efaxd.mongodb.net/test?retryWrites=true"
const options = {
    useNewUrlParser: true,
    dbName: 'critics'
}

const CriticConn = mongoose.createConnection(uri, options)

const nbaSchema = new Schema({ url: String, text: String, id: Number}, { collection: 'nba'})
const nhlSchema = new Schema({ url: String, text: String, id: Number}, { collection: 'nhl'})
const pgaSchema = new Schema({ url: String, text: String, id: Number}, { collection: 'pga'})

module.exports = {
    Pga: CriticConn.model('pga', pgaSchema),
    Nhl: CriticConn.model('nhl', nhlSchema),
    Nba: CriticConn.model('nba', nbaSchema)
} 



