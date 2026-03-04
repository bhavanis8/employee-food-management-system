import "./Dashboard.css";
import React, { useEffect, useState } from "react";

function Dashboard() {

  const [day, setDay] = useState("");
  const [menuData, setMenuData] = useState({});
  const [selectedSession, setSelectedSession] = useState("Morning");
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [wontEat, setWontEat] = useState(false);
  const [finished, setFinished] = useState(false);

  // Check if user already selected today
  const today = new Date().toDateString();
  const storedDate = localStorage.getItem("foodDate");

  useEffect(() => {

    if (storedDate === today) {
      setFinished(true);
      return;
    }

    fetch("http://localhost:5000/today-menu")
      .then((res) => res.json())
      .then((data) => {
        setDay(data.day);
        setMenuData(data.sessions);
      })
      .catch((err) => console.log(err));

  }, []);

  // Check if morning time is over
  const isMorningTimeOver = () => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    if (hour > 23 || (hour === 23 && minutes > 0)) {
      return true;
    }
    return false;
  };

  // Select food
  const toggleFood = (food) => {

    setWontEat(false);

    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter((f) => f !== food));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  // Submit food
  const handleSubmit = () => {

    if (wontEat) {
      setSelectedFoods([]);
    }

    if (!wontEat && selectedFoods.length === 0) {
      alert("Please select food or choose I Won't Eat");
      return;
    }

    if (selectedSession === "Morning") {
      localStorage.setItem("morningFood", JSON.stringify(selectedFoods));
      setSelectedSession("Afternoon");
      setSelectedFoods([]);
      setWontEat(false);
      return;
    }

    if (selectedSession === "Afternoon") {
      localStorage.setItem("afternoonFood", JSON.stringify(selectedFoods));
      setSelectedSession("Snacks");
      setSelectedFoods([]);
      setWontEat(false);
      return;
    }

    if (selectedSession === "Snacks") {

      localStorage.setItem("snacksFood", JSON.stringify(selectedFoods));
      localStorage.setItem("foodDate", today);

      setFinished(true);
    }
  };

  // Finished page
  if (finished) {
    return (
      <div style={{textAlign:"center", marginTop:"120px"}}>
        <h1>Food Selection Completed ✅</h1>
        <h3>You already selected food for today</h3>
      </div>
    );
  }

  return (
    <div className="dashboard-container">

      <div className="overlay">

        <h1>Today : {day}</h1>

        {/* Session Buttons */}
        <div className="session-buttons">

          <button
            onClick={() => setSelectedSession("Morning")}
            disabled={selectedSession !== "Morning"}
          >
            Morning
          </button>

          <button
            onClick={() => setSelectedSession("Afternoon")}
            disabled={selectedSession !== "Afternoon"}
          >
            Afternoon
          </button>

          <button
            onClick={() => setSelectedSession("Snacks")}
            disabled={selectedSession !== "Snacks"}
          >
            Snacks
          </button>

        </div>

        {/* Morning Time Restriction */}
        {selectedSession === "Morning" && isMorningTimeOver() && (
          <h3 style={{color:"red"}}>Morning selection time is over</h3>
        )}

        <h2>{selectedSession} Menu</h2>

        {/* Food Cards */}

        <div className="food-container">

          {menuData[selectedSession] &&
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

        <br/>

        {/* Won't Eat Option */}

        <label className="radio-label">

          <input
            type="radio"
            checked={wontEat}
            onChange={() => {
              setWontEat(true);
              setSelectedFoods([]);
            }}
          />

          I Won't Eat

        </label>

        <br/><br/>

        {/* Submit Button */}

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={selectedSession === "Morning" && isMorningTimeOver()}
        >
          Submit
        </button>

      </div>

    </div>
  );
}

export default Dashboard;