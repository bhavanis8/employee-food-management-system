import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-container">

      <h1>Employee Food Management System</h1>

      <div className="button-group">

        <button onClick={() => navigate("/login")}>
          Employee Login
        </button>

        <button onClick={() => navigate("/admin-login")}>
          Admin Login
        </button>

      </div>

    </div>

  );
}

export default Home;