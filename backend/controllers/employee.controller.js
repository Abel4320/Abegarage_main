//import the employee service
const e = require('express');
const employeeService = require('../service/employee.service');

// Create a function to handle the install request
async function createEmployee(req , res ,next){
    const employeeExists = await employeeService.checkIfEmployeeExists(req.body.employee_email)
    if (employeeExists) {
        res.status(400).json({
            message: "Employee with this email adress already exists"
        })
    } else{
        try {
           const employeeData=req.body
           const employee = await employeeService.createEmployee(employeeData) 
           if(!employee){
            res.stauts(400).json(
                {error :'Failed to add employee'}
                )
           } else {
            res.status(201).json({
               success: 'true',
            })
           }
        } catch (error) {   
            res.status(400).json({
                message: error.message
            })
        }
    }
}

module.exports = {createEmployee}
