const pool = require("../config/database");

// GET /api/regions
const getAllRegions = async (req, res, next) => {
    try {
        const { type, search } = req.query;

        let query = `
            SELECT
                r.id,
                r.name,
                r.code,
                r.region_type,
                r.parent_id,
                parent.name AS parent_name
            FROM regions r
            LEFT JOIN regions parent
                ON r.parent_id = parent.id
            WHERE 1 = 1
        `;

        const values = [];
        let paramIndex = 1;

        if (type) {
            query += ` AND r.region_type = $${paramIndex}`;
            values.push(type);
            paramIndex++;
        }

        if (search) {
            query += ` AND r.name ILIKE $${paramIndex}`;
            values.push(`%${search}%`);
        }

        query += ` ORDER BY r.name`;

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

// GET /api/regions/:id
const getRegionById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            `
            SELECT
                r.id,
                r.name,
                r.code,
                r.region_type,
                r.parent_id,
                parent.name AS parent_name
            FROM regions r
            LEFT JOIN regions parent
                ON r.parent_id = parent.id
            WHERE r.id = $1
            `,
            [id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Region not found.",
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

// GET /api/regions/:id/observations
const getRegionObservations = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { indicator, year } = req.query;

        let query = `
            SELECT
                o.id,
                r.name AS region,
                o.year,
                o.category,
                o.value,
                i.code AS indicator_code,
                i.name AS indicator_name,
                i.unit
            FROM observations o
            JOIN regions r ON r.id = o.region_id
            JOIN indicators i ON i.id = o.indicator_id
            WHERE r.id = $1
        `;

        const values = [id];
        let paramIndex = 2;

        if (indicator) {
            query += ` AND i.code = $${paramIndex}`;
            values.push(indicator);
            paramIndex++;
        }

        if (year) {
            query += ` AND o.year = $${paramIndex}`;
            values.push(year);
        }

        query += ` ORDER BY o.year, i.name, o.category`;

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
    getAllRegions,
    getRegionById,
    getRegionObservations,
};