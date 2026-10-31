const express = require("express");
const router = express.Router();

const {
    getAllRegions,
    getRegionById,
    getRegionObservations,
} = require("../controllers/regionController");

router.get("/", getAllRegions);
router.get("/:id/observations", getRegionObservations);
router.get("/:id", getRegionById);

module.exports = router;