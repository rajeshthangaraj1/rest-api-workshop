let mongoose            = require('mongoose'),
    Schema              = mongoose.Schema;
const server = 'ds135421.mlab.com:35421'
const database = 'mongo_new'
const user = 'mongo_learn'
const password = 'mongo_learn1'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let LocationsSchema = new Schema({
  lat: String,
  lng: String,
  description: String,
  username: String,
  location_status: String,
})

module.exports = mongoose.model('locations', LocationsSchema)
