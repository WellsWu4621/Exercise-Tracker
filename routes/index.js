const router = require('express').Router()
const { join } = require('path')

router.use('/api', require('./exerciseRoutes.js'))
router.use('/api', require('./workoutRoutes.js'))

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'))
})

router.get('/stats', (req, res) => {
  res.sendFile(join(__dirname, '../public/stats.html'))
})

router.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname, '../public/exercise.html'))
})


module.exports = router
