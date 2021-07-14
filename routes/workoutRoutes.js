const router = require('express').Router()
const { Workout } = require('../models')

// GET all workout
router.get('/workouts', (req, res) => Workout.aggregate([
  {
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }
])
  .then(workout => res.json(workout))
  .catch(err => console.log(err)))

// GET all workouts in range
router.get('/workouts/range', (req, res) => Workout.aggregate([
  {
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration'
      }
    }
  }
])
  .then(workout => res.json(workout))
  .catch(err => console.log(err)))

// POST one workout
router.post('/workouts', (req, res) => {
  const newWorkout = { ...req.body, day: new Date(new Date().setDate(new Date().getDate())) }
  Workout.create(newWorkout)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// PUT one workout
router.put('/workouts/:id', (req, res) => Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
  .then((dbWorkout) => res.json(dbWorkout))
  .catch(err => console.log(err)))

// DELETE one workout
router.delete('/workouts/:id', (req, res) => Workout.findByIdAndDelete(req.params.id)
  .then((dbWorkout) => res.json(dbWorkout))
  .catch(err => console.log(err)))

module.exports = router
