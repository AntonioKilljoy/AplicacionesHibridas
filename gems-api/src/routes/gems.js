const express = require('express')
const router = express.Router()
const GemsController = require('../controllers/gemsController')

router.post('/api/gems', GemsController.createGem)
router.get('/api/gems', GemsController.getAllGems)
router.get('/api/gems', GemsController.getAllGems)
router.get('/api/gems', GemsController.getAllGems)

module.exports = router