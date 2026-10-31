const pool = require("../config/database");

// GET /api/compare
const compareRegions = async (req, res, next) => {
    try {
        const {
            indicator,
            year,
            regions,
        } = req.query;

        // Validate required parameters
        if (!indicator || !year || !regions) {
            return res.status(400).json({
                success: false,
                message: "indicator, year, and regions are required.",
            });
        }

        // Convert region IDs into an array
        const regionIds = regions
            .split(",")
            .map((id) => Number(id.trim()));

        if (
            regionIds.length < 2 ||
            regionIds.some((id) => !Number.isInteger(id) || id <= 0)
        ) {
            return res.status(400).json({
                success: false,
                message: "Provide at least two valid region IDs.",
            });
        }

        const selectedYear = Number(year);

        if (!Number.isInteger(selectedYear)) {
            return res.status(400).json({
                success: false,
                message: "Year must be a valid integer.",
            });
        }

        const query = `
            SELECT
                r.id AS region_id,
                r.name AS region,
                r.region_type,
                i.code AS indicator_code,
                i.name AS indicator_name,
                i.unit,
                o.year,
                o.category,
                o.value
            FROM observations o
            JOIN regions r
                ON r.id = o.region_id
            JOIN indicators i
                ON i.id = o.indicator_id
            WHERE i.code = $1
                AND o.year = $2
                AND r.id = ANY($3::integer[])
            ORDER BY r.name, o.category;
        `;

        const result = await pool.query(query, [
            indicator,
            selectedYear,
            regionIds,
        ]);

        res.json({
            success: true,
            count: result.rowCount,
            filters: {
                indicator,
                year: selectedYear,
                regions: regionIds,
            },
            data: result.rows,
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    compareRegions,
};