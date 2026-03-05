import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  return (

    <div className="admin-dashboard">

      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="dashboard-card">

        <h1>Admin Dashboard</h1>

        <hr />

        <h2>Food Count Today</h2>

        <h3>Morning</h3>
        <p>Idli → 25</p>
        <p>Dosa → 18</p>
        <p>Upma → 12</p>

        <h3>Afternoon</h3>
        <p>Meals → 30</p>
        <p>Curd Rice → 12</p>

        <h3>Snacks</h3>
        <p>juice → 50</p>
        <p>Buscuits → 82</p>

      </div>

    </div>

  );

}

export default AdminDashboard;