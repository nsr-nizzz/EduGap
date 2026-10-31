const pool = require("../config/database");

// GET /api/dashboard/summary
const getSummary = async (req, res, next) => {
    try {
        const result = await pool.query(`
            SELECT
                (SELECT COUNT(*) FROM indicators) AS total_indicators,
                (SELECT COUNT(*) FROM regions
                    WHERE region_type = 'province') AS total_provinces,
                (SELECT COUNT(*) FROM observations) AS total_observations,
                (SELECT MIN(year) FROM observations) AS first_year,
                (SELECT MAX(year) FROM observations) AS last_year
        `);

        res.json({
            success: true,
            data: result.rows[0],
        });
    } catch (error) {
        next(error);
    }
};

// GET /api/dashboard/trends?indicator=APS
const getTrends = async (req, res, next) => {
    try {
        const {
            indicator = "APS",
            region_id,
            year,
        } = req.query;

        let query = `
            SELECT
                r.id AS region_id,
                r.name AS region,
                r.region_type,
                o.year,
                o.category,
                o.value,
                i.code AS indicator_code,
                i.name AS indicator_name,
                i.unit
            FROM observations o
            JOIN indicators i ON i.id = o.indicator_id
            JOIN regions r ON r.id = o.region_id
            WHERE i.code = $1
        `;

        const values = [indicator];
        let paramIndex = 2;

        if (region_id) {
            query += ` AND r.id = $${paramIndex}`;
            values.push(region_id);
            paramIndex++;
        }

        if (year) {
            query += ` AND o.year = $${paramIndex}`;
            values.push(year);
        }

        query += ` ORDER BY o.year, r.name, o.category`;

        const result = await pool.query(query, values);

        res.json({
            success: true,
            count: result.rowCount,
            data: result.rows,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getSummary,
    getTrends,
};