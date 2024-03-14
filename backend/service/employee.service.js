
//import the db config 
const conn= require('../config/db.config')
const bcrypt= require('bcrypt')
async function checkIfEmployeeExists(email){
    const query ='  SELECT * FROM employee WHERE employee_email=?'
    const rows= await conn.query(query,[email])
    if (rows.length > 0){
        return true 
    }
    return false
}
// a function to create a new employee
async function createEmployee (employee){
    let createdEmployee = {}
    try {
        //genetare and salt and hash the password 
        const salt =await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(employee.employee_password, salt);
        //insert the new employee email
        const query = 'INSERT INTO employee (employee_email,active_employee) VALUES (?,?)';
        const rows= await conn.query(query,[employee.employee_email,employee.active_employee])
        // console.log(rows)
        if (rows.affectedRows !==1){
            return false
        }
        //get the employee id from the insert
        const employee_id=rows.insertId
        //insert remiinig data for the employee 
        const query2="INSERT INTO employee_info (employee_id,employee_first_name,employee_last_name,employee_phone) VALUES (?,?,?,?)";
        const rows2=await conn.query(query2,[employee_id,employee.employee_first_name,employee.employee_last_name ,employee.employee_phone])
        const query3="INSERT INTO employee_pass (employee_id,employee_password_hashed) VALUES (?,?)";
        const rows3=await conn.query(query3,[employee_id,hashedPassword]);
        const query4 ="INSERT INTO employee_role (employee_id,company_role_id) VALUES (?,?)";
        const row4=await conn.query(query4,[employee_id,employee.company_role_id])

        //construct to the employee oobject to return 
        createdEmployee={
            employee_id:employee_id,
            employee_email:employee.employee_email,
            active_employee:employee.active_employee,
            employee_first_name:employee.employee_first_name,
            employee_last_name:employee.employee_last_name,
            employee_phone:employee.employee_phone,
            company_role_id:employee.company_role_id
        }

    } catch (error) {
        console.log(error)
    }
    return createdEmployee;
}
module.exports ={
    checkIfEmployeeExists,
    createEmployee
}