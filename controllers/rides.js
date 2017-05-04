const Ride = require('../models/rides')

function index (req, res, next) {
  Ride.all().then(rides => res.render('rides/index', { rides }))
}

function show (req, res, next) {
  const id = req.params.id
  Ride.findById(id).then(ride => res.render('rides/show', { ride }))
}

function newForm (req, res, next) {
  res.render('rides/new', { ride: {} })
}

function create (req, res, next) {
  Ride.create(req.body).then(([ride]) => res.redirect(`/rides/${ride.id}`))
}

function editForm (req, res, next) {
  const id = req.params.id
  Ride.findById(id).then(ride => res.render('rides/edit', { ride }))
}

function update (req, res, next) {
  const id = req.params.id
  Ride.update(id, req.body).then(([ride]) => res.redirect(`/rides/${ride.id}`))
}

function destroy (req, res, next) {
  const id = req.params.id
  Ride.destroy(id).then(ride => res.redirect(`/rides`))
}

module.exports = { index, show, newForm, create, editForm, update, destroy }
