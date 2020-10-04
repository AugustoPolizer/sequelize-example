const CrewController = require('./crew')
const ShipController = require('./ship')
const express = require('express')

const router = express.Router()

const crewController = new CrewController()
router.use('/crew', crewController.router)

const shipController = new ShipController()
router.use('/ship', shipController.router)

module.exports = router


