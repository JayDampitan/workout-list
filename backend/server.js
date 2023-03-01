const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoutes")

connectDB();

const app = express();

// express middles for
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRoutes);

//middleware for status code
app.use(errorHandler);

app.listen(port, () => console.log(`Listening to port ${port}`));
