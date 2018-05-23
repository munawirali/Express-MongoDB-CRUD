const router = require('express').Router()
const dishes = require('../_controllers/leaderContrl')

module.exports = router

router.get('/', dishes.findAll)
router.get('/:id', dishes.findById)
router.post('/', dishes.create)
router.put('/:id', dishes.update)
router.delete('/:id', dishes.remove)
