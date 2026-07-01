const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	}),
);

// Routes
app.use("/api/auth", authRoutes);

//Events
app.use("/api/events", eventRoutes);

app.get("/", (req, res) => {
	res.json({
		success: true,
		message: "Welcome to ClubVerse API",
	});
});

module.exports = app;
