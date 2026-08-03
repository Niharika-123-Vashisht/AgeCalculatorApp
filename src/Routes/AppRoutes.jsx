import React from "react";
import {Routes,Route} from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import AgeCalculator from "../Pages/AgeCalculator";
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