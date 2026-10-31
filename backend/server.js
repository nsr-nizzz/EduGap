require("dotenv").config();

const app = require("./app");
const pool = require("./config/database");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await pool.query("SELECT NOW()");

        console.log("Database connection successful.");

        app.listen(PORT, () => {
            console.log(
                `EduGap API running at http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error(
            "Failed to start server:",
            error.message
        );

        process.exit(1);
    }
};

startServer();