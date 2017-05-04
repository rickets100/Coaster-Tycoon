const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/parks')

router.get('/', ctrl.index)
router.get('/:id', ctrl.show)

module.exports = router
