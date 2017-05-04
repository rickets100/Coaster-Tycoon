const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/parks')

router.get('/', ctrl.index)
router.get('/new', ctrl.newForm)
router.get('/:id', ctrl.show)
router.get('/:id/edit', ctrl.editForm)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)

module.exports = router
