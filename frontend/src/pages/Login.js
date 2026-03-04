<<<<<<< HEAD
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/corporate-bg.jpg";

function Login() {
  const [employeeId, setEmployeeId] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!employeeId.trim()) {
      return;
    }

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="login-card">
        <h1 className="title">Employee Login</h1>

        <input
          type="text"
          placeholder="Enter Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="input-field"
        />

        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login
=======
import React, { useState } from "react";
import Dashboard from "./Dashboard";

function Login() {
  const [employeeId, setEmployeeId] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ employeeId })
    });

    const data = await response.json();

    if (data.success) {
      setIsLoggedIn(true);
    } else {
      setMessage(data.message);
    }

  } catch (error) {
    setMessage("Server error");
  }
};

  if (isLoggedIn) {
  return <Dashboard />;
}

return (
  <div style={{ textAlign: "center", marginTop: "100px" }}>
    <h2>Employee Login</h2>

    <input
      type="text"
      placeholder="Enter Employee ID"
      value={employeeId}
      onChange={(e) => setEmployeeId(e.target.value)}
      style={{ padding: "8px", width: "200px" }}
    />

    <br /><br />

    <button onClick={handleLogin} style={{ padding: "8px 20px" }}>
      Login
    </button>

    <p>{message}</p>
  </div>
);
}

export default Login;
>>>>>>> 0c677f02caa271fefceba942d0ca4ce3610e9405
