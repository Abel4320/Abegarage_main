const loginService = require('../service/login.service');
// Import the jsonwebtoken 
const jwt = require('jsonwebtoken');
// Import the secret key from the env
const jwtSecret = process.env.JWT_SECRET;

// Create a function to handle a login function 
async function logIn(req, res, next) {
    try {
        const employeeLoginData = req.body;
        // Call the login function from the login service
        const employee = await loginService.logIn(employeeLoginData);

        if (employee.status === "failed") {
            res.status(403).json({
                status: employee.status,
                message: employee.message,
            });
        } else {
            const payload = {
                employee_id: employee.data.employee_id,
                employee_email: employee.data.employee_email,
                employee_role: employee.data.company_role_id,
                employee_first_name: employee.data.employee_first_name,
            };

            const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

            // Send back the success response with token
            // Removed the redundant second response
            res.status(200).json({
                status: "success",
                message: "Employee logged in successfully",
                token: token, // Directly sending the token here
            });
        }
    } catch (error) {
        console.error(error);
        // Send a 500 Internal Server Error response if an exception occurs
        res.status(500).json({
            status: "error",
            message: "An unexpected error occurred",
        });
    }
}

module.exports = {
    logIn
};
