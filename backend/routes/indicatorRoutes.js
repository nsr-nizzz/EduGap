const express = require("express");
const router = express.Router();

const {
    getAllIndicators,
    getIndicatorByCode,
} = require("../controllers/indicatorController");

router.get("/", getAllIndicators);
router.get("/:code", getIndicatorByCode);

module.exports = router;