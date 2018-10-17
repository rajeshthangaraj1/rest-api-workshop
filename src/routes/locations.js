let LocationModel = require('../models/location.model')
let express = require('express')
let router = express.Router()

// Create a new customer
// POST localhost:3000/customer

router.post('/locations', (req, res) => {

  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  if(!req.body.username) {

  }

  // let user = {
  //   name: 'firstname lastname',
  //   email: 'email@gmail.com'
  // }

  let model = new LocationModel(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }

      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET
router.get('/locations', (req, res) => {
  
  LocationModel.find({})
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// UPDATE
router.put('/locations', (req, res) => {
	 console.log('asd');
  if(!req.query.username) {
    return res.status(400).send('Missing  parameter: username')
  }

  LocationModel.findOneAndUpdate({
    username: req.query.username
  }, req.body, {
    new: true
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// DELETE
router.delete('/locations', (req, res) => {
	 console.log('asd');
  if(!req.query.username) {
    return res.status(400).send('Missing  parameter: username')
  }

  LocationModel.findOneAndRemove({
    username: req.query.username
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router
