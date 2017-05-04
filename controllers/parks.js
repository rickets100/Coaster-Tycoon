const Park = require('../models/parks')

function index (req, res, next) {
  Park.all().then(parks => res.render('parks/index', { parks }))
}

function show (req, res, next) {
  const id = req.params.id
  Park.findById(id).then(park => res.render('parks/show', { park }))
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
  Park.destroy(id).then(park => res.redirect(`/parks`))
}

module.exports = { index, show, newForm, create, editForm, update, destroy }
