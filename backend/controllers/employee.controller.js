// Import the necessary modules
const employeeService = require('../service/employee.service');

// Create a function to handle the creation of an employee
async function createEmployee(req, res, next) {
    try {
        // Check if the employee already exists
        const employeeExists = await employeeService.checkIfEmployeeExists(req.body.emplo yee_email);
        if (employeeExists) {
            return res.status(400).json({
                message: "Employee with this email address already exists."
            });
        }
        console.log(req.header)
        
        // Proceed to create the employee
        const employeeData = req.body;
        const employee = await employeeService.createEmployee(employeeData);
        
        // Check if the employee creation was successful
        if (!employee) {
            return res.status(400).json({
                error: 'Failed to add employee.'
            });
        }
        
        // Respond with the newly created employee data
        res.status(201).json({
            success: true, // It's better to use boolean true instead of string 'true'
            data: employee
        });
        
    } catch (error) {
        // Catch and respond with any errors that occur during the process
        res.status(500).json({ // Use a 500 status code for server errors
            message: error.message
        });
    }
}

module.exports = { createEmployee };
