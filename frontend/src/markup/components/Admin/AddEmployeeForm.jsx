import React, { useState } from 'react';
import useAuth from '../../../context/AuthContext';
import employeeService from '../../../services/employee.service'
function AddEmployeeForm(props) {

  const [employeeEmail, setEmail] = useState('');
  const [employeeFirstName, setFirstName] = useState('');
  const [employeeLastName, setLastName] = useState('');
  const [employeePhone, setPhone] = useState('');
  const [employeePassword, setPassword] = useState('');
  const [activeEmployee, setActiveEmployee] = useState(1);
  const [companyRoleId, setCompanyRoleId] = useState(1);
  //Error states 
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');

  let loggedInEmployeeToken = '';
    // Function to handle phone number changes
    const {employee} = useAuth()
    if (employee && employee.employee_token){
      loggedInEmployeeToken=employee.employee_token
    }
  const clearErrors = (e) => {
   
    setEmailError('');
    setFirstNameError('');
    setLastNameError('');
    setPhoneError('');
    setPasswordError('');
    setGeneralError('');
    setServerError('');
  };
  const handleRoleChange = (e) => {
    setCompanyRoleId(e.target.value);
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    clearErrors();

    let valid = true;
    if (!employeeFirstName) {
      setFirstNameError('First Name is required');
      valid = false;
    }
    if (!employeeLastName) {
      setLastNameError('Last Name is required');
      valid = false;
    }
    if (!employeeEmail) {
      setEmailError('Email is required');
      valid = false;
    }else if(!employeeEmail.includes('@')){
      setEmailError('Please enter a valid email');
      valid = false;
    }else{
      setEmailError('');
    }
    if (!employeePhone) {
      setPhoneError('Phone Number is required');
      valid = false;
    }
    if (!employeePassword || employeePassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    }

    if (!valid) {
      return;
    }

    const formData = {
      employee_email: employeeEmail,
      employee_first_name: employeeFirstName,
      employee_last_name: employeeLastName,
      employee_phone: employeePhone,
      active_employee: activeEmployee,
      company_role_id: companyRoleId,
      employee_password: employeePassword,
    
    };
    const newEmployee = employeeService.createEmployee(formData,loggedInEmployeeToken)
    newEmployee.then((response)=>response.json()).then((data)=>{

if(data.error){
  setServerError(data.error);
}else{
  setSuccess(true);
  setServerError(''); 
  // Redirect to the employees page after 2 seconds 
  setTimeout(() => {
    window.location.href='/'; 
  }, 2000);
}
}).catch((error) => {
  const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
  setServerError(resMessage); 
});

  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new employee</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleAddEmployee}>
                {serverError&& <div className='employee_form_errors'>{serverError}</div>}
                  <div className="row clearfix">
                    {/* Email field with error handling */}
                    <div className="form-group col-md-12">
                      {emailError && <div className='employee_form_errors'>{emailError}</div>}
                      <input
                        onChange={(e) => { clearErrors(); setEmail(e.target.value); }}
                        value={employeeEmail}
                        type="email"
                        name="employeeEmail"
                        placeholder="Employee email"
                      />
                    </div>
                    {/* First Name field with error handling */}
                    <div className="form-group col-md-12">
                      {firstNameError && <div className='employee_form_errors'>{firstNameError}</div>}
                      <input
                        onChange={(e) => { clearErrors(); setFirstName(e.target.value); }}
                        value={employeeFirstName}
                        type="text"
                        name="employeeFirstName"
                        placeholder="First name"
                      />
                    </div>
                    {/* Last Name field with error handling */}
                    <div className="form-group col-md-12">
                      {lastNameError && <div className='employee_form_errors'>{lastNameError}</div>}
                      <input
                        onChange={(e) => { clearErrors(); setLastName(e.target.value); }}
                        value={employeeLastName}
                        type="text"
                        name="employeeLastName"
                        placeholder="Last name"
                      />
                    </div>
                    {/* Phone field with error handling */}
                    <div className="form-group col-md-12">
                      {phoneError && <div className='employee_form_errors'>{phoneError}</div>}
                      <input
                         onChange={(e) => { clearErrors(); setPhone(e.target.value); }}
                        value={employeePhone}
                        type="text"
                        name="employeePhone"
                        placeholder="Employee phone (555-555-5555)"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <select   
                      value={companyRoleId} 
                       onChange={handleRoleChange} 
                      name="employee_role" className="custom-select-box">
                        <option value="1">Employee</option>
                        <option value="2">Manager</option>
                        <option value="3">Admin</option>
                      </select>
                    </div>
                    {/* Password field with error handling */}
                    <div className="form-group col-md-12">
                      {passwordError && <div className='employee_form_errors'>{passwordError}</div>}
                      <input
                        onChange={(e) => { clearErrors(); setPassword(e.target.value); }}
                        value={employeePassword}
                        type="password"
                        name="employeePassword"
                        placeholder="Password"
                      />
                    </div>
                    {generalError && <div className='employee_form_errors'>{generalError}</div>}
                    {serverError && <div className='employee_form_errors'>{serverError}</div>}
                    <div className="form-group col-md-12">
                      <button className="theme-btn btn-style-one" type="submit">Add employee</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddEmployeeForm;
