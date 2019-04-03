const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const nbaSchema = new Schema({ url: String, text: String, id: Number}, { collection: 'nba'})

module.exports = Nba = mongoose.model('nba', nbaSchema)
