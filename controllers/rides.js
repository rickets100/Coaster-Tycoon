const Ride = require('../models/rides')
const Park = require('../models/parks')

function index (req, res, next) {
  Ride.all()
  .then(rides => res.render('rides/index', { rides }))
}

function show(req, res, next) {
  const id = req.params.id

  Ride.findById(id)
  .where('id', id)
  .select('*')
  .then(ride => {
    let rideParkId = ride.park_id
    Park.findById(rideParkId)
    .select('*')
    .then(park => {
      res.render('rides/show', { park, ride })
    })
  })
}

function newForm(req, res, next) {
  Park.all()
  .then(parks => {
    res.render('rides/new', { parks })
  })
}

function editForm(req, res, next) {
  const id = req.params.id
  Ride.findById(id)
  .then(ride => {
    Park.all()
    .then(parks => {
      res.render('rides/edit', { ride, parks })
    })
  })
}

function create(req, res, next) {
  const body = {
    name: req.body.name,
    capacity: req.body.capacity,
    popularity: req.body.popularity,
    park_id: req.body.park_id
  }

  Ride.create(body)
  .then(ride => res.redirect('/rides'))
}

function update(req, res, next) {
  const parkId = req.body.park_id
  const id = req.params.id
  const body = {
    id: req.params.id,
    name: req.body.name,
    capacity: req.body.capacity,
    popularity: req.body.popularity,
    park_id: parkId
  }

  Ride.update(body)
  .then(ride => res.redirect(`/rides/${id}`))
}

function destroy(req, res, next) {
  const id = req.params.id
  Ride.destroy(id)
  .then(ride => res.redirect('/rides'))
}

module.exports = { index, show, newForm, editForm, create, update, destroy }
