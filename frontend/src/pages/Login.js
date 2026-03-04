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