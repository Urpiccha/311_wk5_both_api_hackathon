const express = require("express");
const router = express.Router();

const allDepts = require("../controllers/getDepts");
const deptByEmpId = require("../controllers/getDeptsByEmpId");

router.get("/departments", allDepts.getDepts);
router.get("/departments/employees/:id", deptByEmpId.getDeptsByEmpId);

module.exports = router;
