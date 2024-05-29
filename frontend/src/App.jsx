import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login,Unauthorized } from './markup/pages/index';
import {Addemployee,Orders,Employees,Customers} from './markup/pages/admin/index'
import {Header,Footer} from './markup/components/index'
import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";
import './assets/template_assets/css/bootstrap.css'
import './assets/template_assets/css/style.css'
import './assets/template_assets/css/responsive.css'
import './assets/template_assets/css/color.css'
import './assets/styles/custom.css'


const App = () => {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/add-employee" element={<Addemployee />} />
          <Route path="/unauthorized" element={<Unauthorized/>}/>
          <Route path="/admin/orders" element={<PrivateAuthRoute   roles={[1, 2, 3]}><Orders/></PrivateAuthRoute>} />
          <Route path="/admin/employees" element={<PrivateAuthRoute   roles={[2, 3]}><Employees /></PrivateAuthRoute>}/>
          <Route path="/admin/customer" element={<PrivateAuthRoute   roles={[2, 3]}><Customers/></PrivateAuthRoute>} />
          {/* Add more routes here if needed */}
        </Routes>
        <Footer/>
    </div>
  );
};

export default App;
