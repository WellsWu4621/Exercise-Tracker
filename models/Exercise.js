const { model, Schema } = require('mongoose')

const Exercise = new Schema({
  name: String,
  reps: Number,
  sets: Number,
  type: String,
  weight: Number,
  duration: Number,
  workout: {
    type: Schema.Types.ObjectId,
    ref: 'Workout'
  }

})

module.exports = model('Exercise', Exercise)