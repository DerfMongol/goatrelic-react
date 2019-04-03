const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pgaSchema = new Schema({ url: String, text: String, id: Number}, { collection: 'pga'})

module.exports = Pga = mongoose.model('pga', pgaSchema)
