const pool = require("../config/database");

// GET /api/map?indicator=APS&year=2025
const getMapData = async (req, res, next) => {
    try {
        const {
            indicator = "APS",
            year,
            category,
        } = req.query;

        if (year && !Number.isInteger(Number(year))) {
            return res.status(400).json({
                success: false,
                message: "Year must be a valid integer.",
            });
        }

        let query = `
            SELECT
                r.id AS region_id,
                r.name AS region,
                r.code AS region_code,
                r.region_type,
                r.parent_id,
                i.code AS indicator_code,
                i.name AS indicator_name,
                i.unit,
                o.year,
                o.category,
                o.value
            FROM observations o
            JOIN regions r ON r.id = o.region_id
            JOIN indicators i ON i.id = o.indicator_id
            WHERE i.code = $1
        `;

        const values = [indicator];
        let paramIndex = 2;

        if (year) {
            query += ` AND o.year = $${paramIndex}`;
            values.push(Number(year));
            paramIndex++;
        }

        if (category) {
            query += ` AND o.category = $${paramIndex}`;
            values.push(category);
        }

        query += ` ORDER BY r.name, o.category`;

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
    getMapData,
};