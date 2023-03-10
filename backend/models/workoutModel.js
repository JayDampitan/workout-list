const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
      type: String,
      required: [true, "Please add a text value"],
    },
    reps: {
      type: Number,
      required:[true, "Please add a number value"],
    },
    weight: {
      type: Number,
      required: [true, "Please add a number value"],
    },
    date: {
      type: Date,
      required: [true, "Please add a date value"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
