const express = require("express");
const router = express.Router();

const getSalary = require("../controllers/getSalaries");
const getSalaryById = require("../controllers/getSalaryById");
const getSalaryByFirstName = require("../controllers/getSalaryByFirstName");

router.get("/salaries", getSalary.getSalary);
router.get("/salaries/:id", getSalaryById.getSalaryById);
router.get(
	"/salaries/firstname/:firstname",
	getSalaryByFirstName.getSalaryByFirstName
);

module.exports = router;
