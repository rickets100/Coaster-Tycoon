const Park = require('../models/parks')
const Ride = require('../models/rides')

function index (req, res, next) {
  Park.all()
  .select('parks.name', 'parks.id')
  .innerJoin('rides', 'parks.id', 'rides.park_id')
  .groupBy('parks.name', 'rides.park_id', 'parks.id')
  .count('park_id as rideCount')
  .then(parks => {
    res.render('parks/index', { parks })
  })
}

function show(req, res, next) {
  const id = req.params.id
  Ride.all().where({ park_id: id }).then(rides => {
    Park.findById(id)
    .then(park => res.render('parks/show', { park, rides }))
  })
}

function newForm(req, res, next) {
  res.render('parks/new')
}

function editForm(req, res, next) {
  const id = req.params.id
  Park.findById(id).then(park => res.render('parks/edit', {park}))
}

function create(req, res, next) {
  const body = {
    name: req.body.name,
    city: req.body.city,
    state: req.body.state
  }

  Park.create(body)
  .then(park => res.redirect('/parks'))
}

function update(req, res, next) {
  const id = req.params.id
  const body = {
    id: req.params.id,
    name: req.body.name,
    city: req.body.city,
    state: req.body.state
  }

  Park.update(body)
  .then(park => res.redirect(`/parks/${id}`))
}

function destroy(req, res, next) {
  const id = req.params.id
  Park.destroy(id)
  .then(park => res.redirect('/parks'))
}

module.exports = { index, show, newForm, editForm, create, update, destroy }
