const getAllWorkouts = (req, res) =>
  res.status(200).json({ message: "get all workouts" });

const createWorkout = (req, res) =>
  res.status(200).json({ message: "create a workout" });

const updateWorkout = (req, res) =>
  res.status(200).json({ message:` update a workout ${req.params.id}`});

const deleteWorkout = (req, res) =>
  res.status(200).json({ message: `delete a workout ${req.params.id}` });

module.exports = {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
