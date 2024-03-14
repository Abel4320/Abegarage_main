const express = require('express');
// Call the router method from express to create the router 
const router = express.Router();

// Import the emploeee controller

const installController = require('../controllers/employee.controller');

// Create a route to handle the install request on get
router.post('/api/employee', installController.createEmployee)
//export the router
module.exports = router;