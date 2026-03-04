<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
=======
import React from "react";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Login />
    </div>
>>>>>>> 0c677f02caa271fefceba942d0ca4ce3610e9405
  );
}

export default App;