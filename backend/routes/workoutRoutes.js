const express = require("express");
const router = express.Router();

const {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutControllers");

router.route("/").get(getAllWorkouts).post(createWorkout);

router.route("/:id").put(updateWorkout).delete(deleteWorkout);

module.exports = router;
