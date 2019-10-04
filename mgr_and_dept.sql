INSERT into
dept_manager




SELECT 
 departments.dept_name, dept_manager.emp_no, 
employees.first_name, employees.last_name
FROM 
departments, employees
INNER JOIN 
dept_manager
ON
departments.dept_no = dept_manager.dept_no,
dept_manager.emp_no = employees.emp_no;
 