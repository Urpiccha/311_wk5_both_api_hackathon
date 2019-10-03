const express = require('express')
const router = express.Router()
const { getEmployees, getEmployeesById, getEmployeesByFirstName
} = require('../controllers/employees');


router.get('/', getEmployees);
router.get('/:id', getEmployeesById);
router.get('employees/employees/:first_name', getEmployeesByFirstName);


module.exports = router;