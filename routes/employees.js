const express = require('express')
const router = express.Router()
const { getEmployees, getEmployeesById } = require('../controllers/employees');

//, getEmployeesByFirstName

router.get('/', getEmployees);
router.get('/:id', getEmployeesById);

//router.get('/:first_name', getEmployeesByFirstName);


module.exports = router;