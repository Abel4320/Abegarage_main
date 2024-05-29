import React from 'react'
import useAuth from '../../../context/AuthContext'
import { LoginForm } from '../../components/index'
const Employees = () => {
  const {isLogged, admin,employee}=useAuth()
  if (isLogged){
    if(admin){
      return (
        <div>
          This is Employees Page
        </div>
      )
    }else{
      return (
        <div>
         You are not authorized to this page
        </div>
      )
    }
  }else {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }

}

export default Employees
