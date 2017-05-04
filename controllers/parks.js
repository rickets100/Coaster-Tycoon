const Park = require('../models/parks')

function index (req, res, next) {
  Park.all().then(parks => res.render('parks/index', { parks }))
}

function show (req, res, next) {
  const id = req.params.id
  Park.findById(id).then(park => res.render('parks/show', { park }))
}

module.exports = { index, show }
