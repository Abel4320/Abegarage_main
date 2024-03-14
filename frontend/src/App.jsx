import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login } from './markup/pages/index';
import {Addemployee} from './markup/pages/admin/index'
import {Header,Footer} from './markup/components/index'
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
          {/* Add more routes here if needed */}
        </Routes>
        <Footer/>
    </div>
  );
};

export default App;
