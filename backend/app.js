const express = require("express");
const cors = require("cors");

const dashboardRoutes = require("./routes/dashboardRoutes");
const indicatorRoutes = require("./routes/indicatorRoutes");
const regionRoutes = require("./routes/regionRoutes");
const mapRoutes = require("./routes/mapRoutes");
const insightsRoutes = require("./routes/insightsRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());

// API Home
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "EduGap API is running.",
    });
});

// API Routes
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/indicators", indicatorRoutes);
app.use("/api/regions", regionRoutes);
app.use("/api/map", mapRoutes);
app.use("/api/insights", insightsRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;