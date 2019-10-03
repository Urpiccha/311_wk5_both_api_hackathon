<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const { getEmployees, getEmployeesById, getEmployeesByFirstName
} = require('../controllers/employees');


router.get('/', getEmployees);
router.get('/:id', getEmployeesById);
router.get('employees/employees/:first_name', getEmployeesByFirstName);
=======
const express = require("express");
const router = express.Router();

const getEmployeesController = require("../controllers/getEmployees");
const getEmployeesByIdController = require("../controllers/getEmployeesById");
const getEmployeesByFirstNameController = require("../controllers/getEmployeesByFirstName");

router.get("/employees", getEmployeesController.getAllEmployees);
router.get("/employees/:id", getEmployeesByIdController.getAllEmployeesById);

router.get(
	"/employees/firstname/:first_name",
	getEmployeesByFirstNameController.getEmployeesByFirstName
);
>>>>>>> 74909a5988054dbdc6e27d43dad4e34e7671c0f1

module.exports = router;
