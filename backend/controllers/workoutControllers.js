const asyncHandler = require("express-async-handler");

//@desc Get all workouts
//@route GET /api/workouts/
//@access Public
const getAllWorkouts = asyncHandler(async (req, res) => {
  const { title, weight, reps, date } = req.body;

  if(!title || !weight || !reps || !date) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  res.status(200).json({ message: "get all workouts" });
});

//@desc Create a workout
//@route POST /api/workouts/
//@access Public
const createWorkout = async (req, res) =>
  res.status(200).json({ message: "create a workout" });

//@desc Get all workouts
//@route GET /api/workouts/
//@access Public
const updateWorkout = async (req, res) =>
  res.status(200).json({ message: ` update a workout ${req.params.id}` });

//@desc Get all workouts
//@route GET /api/workouts/
//@access Public
const deleteWorkout = async (req, res) =>
  res.status(200).json({ message: `delete a workout ${req.params.id}` });

module.exports = {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
