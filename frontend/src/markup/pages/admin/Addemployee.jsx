import React from 'react'
import {Adminmenu , AddEmployeeForm } from '../../components/index'
const Addemployee = () => {
  return (
      <div>
        <div className='container-fluid admin-pages'>
          <div className='row'>
            <div className='col-md-3 admin-left-side'> 
            <Adminmenu/>
            </div>
            <div className='col-md-9 admin-right-side'>
              <AddEmployeeForm/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Addemployee