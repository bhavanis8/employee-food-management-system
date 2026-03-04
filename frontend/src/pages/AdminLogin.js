import bg from "../assets/corporate-bg.jpg";
import "./AdminLogin.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminLogin() {

  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if(adminId === "admin" && password === "admin123"){
        navigate("/admin-dashboard");
    } else {
        alert("Invalid Admin Credentials");
    }

  };

  return (

    <div className="admin-container">

      <div className="admin-card">

        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Enter Admin ID"
          value={adminId}
          onChange={(e)=>setAdminId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>

  );
}

export default AdminLogin;