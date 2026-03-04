import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/corporate-bg.jpg";

function Login() {

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const employees = [
    { id: "EMP001", password: "1234" },
    { id: "EMP002", password: "abcd" },
    { id: "EMP003", password: "pass123" }
  ];

  const handleLogin = () => {

    const user = employees.find(
      emp => emp.id === employeeId && emp.password === password
    );

    if (user) {
      navigate("/dashboard");
    } else {
      setMessage("Invalid Employee ID or Password");
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

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />

        <button onClick={handleLogin} className="login-button">
          Login
        </button>

        <p style={{color:"red"}}>{message}</p>

      </div>

    </div>

  );
}

export default Login;