const express = require("express")
const port = process.env.PORT || 5000
const workoutRoutes = require("./routes/workoutRoutes")

const app = express();

app.use("/api/workouts", workoutRoutes);


app.listen(port, () => (console.log(`Listening to port ${port}`)))