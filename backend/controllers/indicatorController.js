const pool = require("../config/database");

// GET /api/indicators
const getAllIndicators = async (req, res, next) => {
    try {
        const result = await pool.query(`
            SELECT
                i.id,
                i.code,
                i.name,
                i.description,
                i.unit,
                i.category,
                COUNT(o.id) AS observation_count,
                MIN(o.year) AS first_year,
                MAX(o.year) AS last_year
            FROM indicators i
            LEFT JOIN observations o
                ON i.id = o.indicator_id
            GROUP BY
                i.id,
                i.code,
                i.name,
                i.description,
                i.unit,
                i.category
            ORDER BY i.name
        `);

        res.json({
            success: true,
            count: result.rowCount,
            data: result.rows,
        });
    } catch (error) {
        next(error);
    }
};

// GET /api/indicators/:code
const getIndicatorByCode = async (req, res, next) => {
    try {
        const { code } = req.params;

        const result = await pool.query(
            `SELECT * FROM indicators WHERE code = $1`,
            [code]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Indicator not found.",
            });
        }

        res.json({
            success: true,
            data: result.rows[0],
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllIndicators,
    getIndicatorByCode,
};