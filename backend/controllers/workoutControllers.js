const asyncHandler = require("express-async-handler");

const Workout = require("../models/workoutModel");

//@desc Get all workouts
//@route GET /api/workouts/
//@access Public
const getAllWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find();
  res.status(200).json(workouts);
});

//@desc Create a workout
//@route POST /api/workouts/
//@access Public
const createWorkout = asyncHandler(async (req, res) => {
  const { title, weight, reps, date } = req.body;

  if (!title || !weight || !reps || !date) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const workout = await Workout.create({
    ...req.body,
  });
  res.status(200).json(workout);
});

//@desc Get all workouts
//@route GET /api/workouts/
//@access Public
const updateWorkout = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const workout = await Workout.findById(id);

  if (!workout) {
    res.status(400);
    throw new Error("Workout not found");
  }

  const updatedWorkout = await Workout.findByIdAndUpdate(
    id,
    {
      ...req.body,
    },
    {
      new: true,
    }
  );
  res.status(200).json(updatedWorkout);
});

//@desc Get all workouts
//@route GET /api/workouts/
//@access Public
const deleteWorkout = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    res.status(400);
    throw new Error("Workout not found");
  }

  res.status(200).json(workout);
});

module.exports = {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
