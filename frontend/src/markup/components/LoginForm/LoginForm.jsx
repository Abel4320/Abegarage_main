import React,{useState} from 'react'
import logInService from '../../../services/login.service'
import {useLocation ,useNavigate} from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons
const LoginForm = () => {
  const navigate=useNavigate();
  const location =useLocation(); 
  const [employeeEmail, setEmail] = useState('');
  const [employeePassword, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  //Error states
  const [emailError,setEmailError] = useState('')
  const [passwordError,setPasswordError] = useState('')
  const [serverError,setServerError] = useState('')
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    let valid = true;
    
    if (!employeeEmail) {
      setEmailError('Email is required');
      valid = false;
    } else if (!employeeEmail.includes('@')) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }
    
    if (!employeePassword || employeePassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }
    
    if (!valid) {
      return;
    }
    
    const formData = {
      employee_email: employeeEmail,
      employee_password: employeePassword,
    };
    
    try {
      const response = await logInService.logIn(formData);
      const data = await response.json();
      
      if (data.status === 'success') {
        // Here we're creating an object to store as JSON
        const tokenObject = { employee_token: data.token };
        localStorage.setItem('employee_token', JSON.stringify(tokenObject));
        window.location.href = '/'
        // Redirecting based on the current path
        location.pathname === '/login' ? navigate('/') : navigate(0);
      } else {
        setServerError(data.message);
      }
    } catch (error) {
      setServerError('Server error occurred');
    }
  };
  

  const clearErrors = ()=>{
    setEmailError('')
    setPasswordError('')
    setServerError('')
  }

  return (
    <div>
        <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Login to your account</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={loginHandler}>
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      {serverError&& <div className='employee_form_errors'>{serverError}</div>}
                      {emailError &&<div className='employee_form_errors'>{emailError}</div>}
                      <input 
                      onChange={(e) => { clearErrors(); setEmail(e.target.value); }}
                      value={employeeEmail}
                       type="email"
                        name="employee_email"
                         placeholder="Email" />
                    </div>
                    <div className="form-group col-md-12">
                    {passwordError&&<div className='employee_form_errors'>{passwordError}</div>}
                    <div style={{ position: 'relative' }}>
                      <input
                        onChange={(e) => { clearErrors(); setPassword(e.target.value); }}
                        value={employeePassword}
                        type={passwordShown ? 'text' : 'password'}
                        name="employee_password"
                        placeholder="Password"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        style={{ position: 'absolute', right: 15, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'transparent' }}
                      >
                        {/* Use an eye icon here. For demonstration, I'm using text. Replace with <FaEye /> or <FaEyeSlash /> based on the state */}
                        {passwordShown ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    </div>
                    <div className="form-group col-md-12">
                      <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span>Login</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default LoginForm