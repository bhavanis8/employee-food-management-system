import "./Dashboard.css";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [day, setDay] = useState("");
  const [menuData, setMenuData] = useState({});
  const [selectedSession, setSelectedSession] = useState("Morning");
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [wontEat, setWontEat] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/today-menu")
      .then((res) => res.json())
      .then((data) => {
        setDay(data.day);
        setMenuData(data.sessions);
      })
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);

  const toggleFood = (food) => {
    setWontEat(false);

    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter((f) => f !== food));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  const handleSubmit = () => {
    if (wontEat) {
      alert("You selected: I Won't Eat");
    } else if (selectedFoods.length === 0) {
      alert("Please select at least one food or choose I Won't Eat");
    } else {
      alert("Selected foods: " + selectedFoods.join(", "));
    }
  };

  const changeSession = (session) => {
    setSelectedSession(session);
    setSelectedFoods([]);
    setWontEat(false);
  };

  return (
    <div className="dashboard-container">
      <div className="overlay">
        <h1>Today: {day}</h1>

        <div className="session-buttons">
          <button onClick={() => changeSession("Morning")}>
            Morning
          </button>
          <button onClick={() => changeSession("Afternoon")}>
            Afternoon
          </button>
          <button onClick={() => changeSession("Snacks")}>
            Snacks
          </button>
        </div>

        <h2>{selectedSession} Menu</h2>

        <div className="food-container">
          {menuData &&
            menuData[selectedSession] &&
            menuData[selectedSession].map((item, index) => (
              <div key={index} className="food-card">
                <img
                  src={"/" + item.image}
                  alt={item.name}
                />
                <h3>{item.name}</h3>

                <input
                  type="checkbox"
                  disabled={wontEat}
                  checked={selectedFoods.includes(item.name)}
                  onChange={() => toggleFood(item.name)}
                />
              </div>
            ))}
        </div>

        <br />

        <label className="radio-label">
          <input
            type="radio"
            name="foodChoice"
            checked={wontEat}
            onChange={() => {
              setWontEat(true);
              setSelectedFoods([]);
            }}
          />
          I Won't Eat
        </label>

        <br /><br />

        <button onClick={handleSubmit} className="submit-btn">
          Submit Selection
        </button>
      </div>
    </div>
  );
}

export default Dashboard;