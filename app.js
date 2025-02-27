const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 5000;

//global middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Import routes
const userRoutes = require("./src/routes/userRoutes");
const gameRoutes = require("./src/routes/gameRoutes");

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/games", gameRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

module.exports = { app, server };
