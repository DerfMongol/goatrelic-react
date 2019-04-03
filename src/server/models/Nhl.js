const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const nhlSchema = new Schema({ url: String, text: String, id: Number}, { collection: 'nhl'})

module.exports = Nhl = mongoose.model('nhl', nhlSchema)
