const express = require("express");
const router = express.Router();

const {
    compareRegions,
} = require("../controllers/comparisonController");

router.get("/", compareRegions);

module.exports = router;