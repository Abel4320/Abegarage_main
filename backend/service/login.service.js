const conn =require('../config/db.config')
const bcrypt = require('bcrypt')
const employeeService = require('./employee.service')

//handel employee login
async function logIn (employeData){
    try {
        let returnData={};
        const employee = await employeeService.getEmployeeByEmail(employeData.employee_email)
        if (employee.length === 0 ){
            returnData={
            status:404,
            message:"Employee not found"
            }
            return returnData
        } else {
            const isMatch = await bcrypt.compare(employeData.employee_password, employee[0].employee_password_hashed)
            if (isMatch) {
                returnData={
                    status:200,
                    message:"Login successful",
                    data: employee[0]
                }
                return returnData
            } else {
                returnData={
                    status:'failed',
                    message:"Invalid password"
                }
                return returnData
            }
        }
    } catch (error) {
        return {
            status:500,
            message:"Internal server error"
        } 
    }
}
module.exports = {
    logIn
};
