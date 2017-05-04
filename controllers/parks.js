const Park = require('../models/parks')
const Ride = require('../models/rides')

function index (req, res, next) {
  Park.all().then(parks => {
    const ids = parks.map(park => park.id)
    Ride.all().whereIn('park_id', ids).then(rides => {
      parks.forEach(park => {
        park.rides = rides.filter(ride => ride.park_id == park.id)
      })

      res.render('parks/index', { parks })
    })
  })
}

function show (req, res, next) {
  const id = req.params.id
  Ride.all().where({ park_id: id }).then(rides => {
    Park.findById(id).then(park => res.render('parks/show', { park, rides }))
  })
}

function newForm (req, res, next) {
  res.render('parks/new', { park: {} })
}

function create (req, res, next) {
  Park.create(req.body).then(([park]) => res.redirect(`/parks/${park.id}`))
}

function editForm (req, res, next) {
  const id = req.params.id
  Park.findById(id).then(park => res.render('parks/edit', { park }))
}

function update (req, res, next) {
  const id = req.params.id
  Park.update(id, req.body).then(([park]) => res.redirect(`/parks/${park.id}`))
}

function destroy (req, res, next) {
  const id = req.params.id
  Ride.all().then(rides => rides.filter(ride => ride.park_id == id))
    .then(rides => rides.map(ride => Ride.destroy(ride.id)))
    .then(rides => Promise.all(rides))
    .then(() => Park.destroy(id).then(park => res.redirect(`/parks`)))
}

module.exports = { index, show, newForm, create, editForm, update, destroy }
