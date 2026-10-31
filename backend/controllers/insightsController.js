const pool = require("../config/database");

// GET /api/insights?indicator=APS
const getInsights = async (req, res, next) => {
    try {
        const { indicator = "APS" } = req.query;

        const query = `
            WITH first_data AS (
                SELECT DISTINCT ON (
                    o.region_id,
                    o.indicator_id,
                    o.category
                )
                    o.region_id,
                    o.indicator_id,
                    o.category,
                    o.year AS first_year,
                    o.value AS first_value
                FROM observations o
                JOIN indicators i ON i.id = o.indicator_id
                WHERE i.code = $1
                ORDER BY
                    o.region_id,
                    o.indicator_id,
                    o.category,
                    o.year ASC
            ),

            latest_data AS (
                SELECT DISTINCT ON (
                    o.region_id,
                    o.indicator_id,
                    o.category
                )
                    o.region_id,
                    o.indicator_id,
                    o.category,
                    o.year AS latest_year,
                    o.value AS latest_value
                FROM observations o
                JOIN indicators i ON i.id = o.indicator_id
                WHERE i.code = $1
                ORDER BY
                    o.region_id,
                    o.indicator_id,
                    o.category,
                    o.year DESC
            )

            SELECT
                r.id AS region_id,
                r.name AS region,
                r.region_type,
                i.code AS indicator_code,
                i.name AS indicator_name,
                i.unit,
                f.category,
                f.first_year,
                f.first_value,
                l.latest_year,
                l.latest_value,
                (l.latest_value - f.first_value) AS value_change,
                CASE
                    WHEN f.first_value = 0 THEN NULL
                    ELSE ROUND(
                        (
                            (l.latest_value - f.first_value)
                            / NULLIF(f.first_value, 0)
                        ) * 100,
                        2
                    )
                END AS percentage_change

            FROM first_data f
            JOIN latest_data l
                ON f.region_id = l.region_id
                AND f.indicator_id = l.indicator_id
                AND f.category = l.category
            JOIN regions r ON r.id = f.region_id
            JOIN indicators i ON i.id = f.indicator_id

            ORDER BY r.name, f.category;
        `;

        const result = await pool.query(query, [indicator]);

        res.json({
            success: true,
            count: result.rowCount,
            indicator,
            data: result.rows,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getInsights,
};