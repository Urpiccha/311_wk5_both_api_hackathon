const express = require("express");
const router = express.Router();

const getTitles = require("../controllers/getAllTitles");
const getEmployeeTitles = require("../controllers/getTitlesById");

router.get("/titles", getTitles.getAllTitles);
router.get("/titles/employee/:id", getEmployeeTitles.getTitlesById);

module.exports = router;
