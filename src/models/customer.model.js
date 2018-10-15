let mongoose = require('mongoose')

const server = 'ds135421.mlab.com:35421'
const database = 'mongo_new'
const user = 'mongo_learn'
const password = 'mongo_learn1'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  contact: String,
})

module.exports = mongoose.model('users', CustomerSchema)
