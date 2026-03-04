<<<<<<< HEAD
import "./Dashboard.css";
=======
>>>>>>> 0c677f02caa271fefceba942d0ca4ce3610e9405
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
<<<<<<< HEAD
      })
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);

  const toggleFood = (food) => {
    setWontEat(false);

=======
      });
  }, []);

  const toggleFood = (food) => {
>>>>>>> 0c677f02caa271fefceba942d0ca4ce3610e9405
    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter((f) => f !== food));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  const handleSubmit = () => {
    if (wontEat) {
      alert("You selected: I Won't Eat");
<<<<<<< HEAD
    } else if (selectedFoods.length === 0) {
      alert("Please select at least one food or choose I Won't Eat");
=======
>>>>>>> 0c677f02caa271fefceba942d0ca4ce3610e9405
    } else {
      alert("Selected foods: " + selectedFoods.join(", "));
    }
  };

<<<<<<< HEAD
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
=======
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Today: {day}</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSelectedSession("Morning")}>Morning</button>
        <button onClick={() => setSelectedSession("Afternoon")}>Afternoon</button>
        <button onClick={() => setSelectedSession("Snacks")}>Snacks</button>
      </div>

      <h2>{selectedSession} Menu</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {menuData[selectedSession] &&
          menuData[selectedSession].map((item, index) => (
            <div
              key={index}
              style={{
                width: "250px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <img
                src={`/${item.image}`}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h3>{item.name}</h3>

              <input
                type="checkbox"
                checked={selectedFoods.includes(item.name)}
                onChange={() => toggleFood(item.name)}
              />
            </div>
          ))}
      </div>

      <br />

      <label>
        <input
          type="checkbox"
          checked={wontEat}
          onChange={() => setWontEat(!wontEat)}
        />
        I Won't Eat
      </label>

      <br /><br />

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit Selection
      </button>
>>>>>>> 0c677f02caa271fefceba942d0ca4ce3610e9405
    </div>
  );
}

export default Dashboard;