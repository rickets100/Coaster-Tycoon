const Ride = require('../models/rides')

function index (req, res, next) {
  Ride.all()
  .then(rides => res.render('rides/index', { rides }))
}

function show(req, res, next) {
  const id = req.params.id
  Ride.findById(id)
  .then(ride => res.render('rides/show', { ride }))
}

function newForm(req, res, next) {
  res.render('rides/new')
}

function editForm(req, res, next) {
  const id = req.params.id
  Ride.findById(id).then(ride => res.render('rides/edit', { ride }))
}

function create(req, res, next) {
  const body = {
    name: req.body.name,
    capacity: req.body.capacity,
    popularity: req.body.popularity

  }

  Ride.create(body)
  .then(ride => res.redirect('/rides'))
}

function update(req, res, next) {
  console.log('req.body is', req.body)
  const id = req.params.id

  const body = {
    id: req.params.id,
    name: req.body.name,
    capacity: req.body.capacity,
    popularity: req.body.popularity
  }

  Ride.update(body)
  .then(ride => res.redirect(`/rides/${id}`))
}

function destroy(req, res, next) {
  console.log('in the rides destroy', req.params.id)
  const id = req.params.id
  Ride.destroy(id)
  .then(ride => res.redirect('/rides'))
}

module.exports = { index, show, newForm, editForm, create, update, destroy }
