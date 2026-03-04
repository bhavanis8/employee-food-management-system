import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/corporate-bg.jpg";

function Login() {
  const [employeeId, setEmployeeId] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!employeeId.trim()) {
      setMessage("Please enter Employee ID");
      return;
    }

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
        navigate("/dashboard");
      } else {
        setMessage(data.message);
      }

    } catch (error) {
      setMessage("Server error");
    }
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

        <p style={{ color: "red", marginTop: "10px" }}>{message}</p>
      </div>
    </div>
  );
}

export default Login;