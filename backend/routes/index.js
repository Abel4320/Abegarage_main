// Import the Express module to create and manage the web server and its routes.
const express = require('express');
// Create a new Router instance which allows defining a group of routes that can be mounted at a specific point in the application.
const router = express.Router();
// Import the router module for installation-related routes from the 'install.routes' file.
const installRouter = require('./install.routes');
// Import the router module for employee-related routes from the 'employee.routes' file.
const employeeRouter = require('./employee.routes');
// Import the router module for login-related routes from the 'login.routes' file.
const loginRouter = require('./login.routes');
// Mount the installRouter on the main router, making all of its routes available to the application.
router.use(installRouter);
// Similarly, mount the employeeRouter on the main router, adding all employee-related routes to the application.
router.use(employeeRouter);
// Mount the loginRouter on the main
router.use(loginRouter);
// Export the router so it can be imported and used in the main application file, integrating all defined routes.
module.exports = router;
