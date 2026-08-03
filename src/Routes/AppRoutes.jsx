import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AgeCalculator from "../pages/AgeCalculator";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/age-calculator" element={<AgeCalculator />} />
</Routes>
  );
}

export default AppRoutes;