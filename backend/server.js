const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();


// express middles for 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/workouts", workoutRoutes);


//middleware for status code
app.use(errorHandler)

app.listen(port, () => console.log(`Listening to port ${port}`));
