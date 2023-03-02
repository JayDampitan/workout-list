const express = require("express");
const router = express.Router();

const {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getAllWorkouts).post(protect, createWorkout);

router.route("/:id").put(protect, updateWorkout).delete(protect, deleteWorkout);

module.exports = router;
