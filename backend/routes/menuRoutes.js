const express = require("express");
const router = express.Router();

router.get("/today-menu", (req, res) => {

  const today = new Date().toLocaleString("en-US", { weekday: "long" });

  const weeklyMenu = {

  Monday: {
    Morning: [
      { name: "Idli", image: "foods/idli.jpg" },
      { name: "Pongal", image: "foods/pongal.jpg" },
      { name: "Poha", image: "foods/poha.jpg" }
    ],
    Afternoon: [
      { name: "Chicken Biryani", image: "foods/chicken-biryani.jpg" },
      { name: "Rajma Chawal", image: "foods/rajma-chawal.jpg" },
      { name: "Lemon Rice", image: "foods/lemon-rice.jpg" }
    ],
    Snacks: [
      { name: "Samosa", image: "foods/samosa.jpg" },
      { name: "Murukku", image: "foods/murukku.jpg" },
      { name: "Bread Pakora", image: "foods/bread-pakora.jpg" }
    ]
  },

  Tuesday: {
    Morning: [
      { name: "Dosa", image: "foods/dosa.jpg" },
      { name: "Upma", image: "foods/upma.jpg" },
      { name: "Bread Omelette", image: "foods/bread-omelette.jpg" }
    ],
    Afternoon: [
      { name: "Veg Pulao", image: "foods/veg-pulao.jpg" },
      { name: "Curd Rice", image: "foods/curd-rice.jpg" },
      { name: "Fish Curry", image: "foods/fish-curry.jpg" }
    ],
    Snacks: [
      { name: "Vada", image: "foods/vada.jpg" },
      { name: "Biscuits", image: "foods/biscuits.jpg" },
      { name: "Tea", image: "foods/tea.jpg" }
    ]
  },

  Wednesday: {
    Morning: [
      { name: "Aloo Paratha", image: "foods/aloo-paratha.jpg" },
      { name: "Cornflakes", image: "foods/cornflakes.jpg" },
      { name: "Poori", image: "foods/poori.jpg" }
    ],
    Afternoon: [
      { name: "Fried Rice", image: "foods/fried-rice.jpg" },
      { name: "Dal Tadka", image: "foods/dal-tadka.jpg" },
      { name: "Paneer Curry", image: "foods/paneer-curry.jpg" }
    ],
    Snacks: [
      { name: "Bhel Puri", image: "foods/bhel-puri.jpg" },
      { name: "Sweets", image: "foods/sweets.jpg" },
      { name: "Juice", image: "foods/juice.jpg" }
    ]
  },
  Thursday: {
    Morning: [
      { name: "Idli", image: "foods/idli.jpg" },
      { name: "Pongal", image: "foods/pongal.jpg" },
      { name: "Poha", image: "foods/poha.jpg" }
    ],
    Afternoon: [
      { name: "Chicken Biryani", image: "foods/chicken-biryani.jpg" },
      { name: "Rajma Chawal", image: "foods/rajma-chawal.jpg" },
      { name: "Lemon Rice", image: "foods/lemon-rice.jpg" }
    ],
    Snacks: [
      { name: "Samosa", image: "foods/samosa.jpg" },
      { name: "Murukku", image: "foods/murukku.jpg" },
      { name: "Bread Pakora", image: "foods/bread-pakora.jpg" }
    ]
  },
  Friday: {
    Morning: [
      { name: "Dosa", image: "foods/dosa.jpg" },
      { name: "Upma", image: "foods/upma.jpg" },
      { name: "Bread Omelette", image: "foods/bread-omelette.jpg" }
    ],
    Afternoon: [
      { name: "Veg Pulao", image: "foods/veg-pulao.jpg" },
      { name: "Curd Rice", image: "foods/curd-rice.jpg" },
      { name: "Fish Curry", image: "foods/fish-curry.jpg" }
    ],
    Snacks: [
      { name: "Vada", image: "foods/vada.jpg" },
      { name: "Biscuits", image: "foods/biscuits.jpg" },
      { name: "Tea", image: "foods/tea.jpg" }
    ]
  },
  Saturday: {
    Morning: [
      { name: "Aloo Paratha", image: "foods/aloo-paratha.jpg" },
      { name: "Cornflakes", image: "foods/cornflakes.jpg" },
      { name: "Poori", image: "foods/poori.jpg" }
    ],
    Afternoon: [
      { name: "Fried Rice", image: "foods/fried-rice.jpg" },
      { name: "Dal Tadka", image: "foods/dal-tadka.jpg" },
      { name: "Paneer Curry", image: "foods/paneer-curry.jpg" }
    ],
    Snacks: [
      { name: "Bhel Puri", image: "foods/bhel-puri.jpg" },
      { name: "Sweets", image: "foods/sweets.jpg" },
      { name: "Juice", image: "foods/juice.jpg" }
    ]
  },
  

  // You can continue Thursday, Friday, Saturday same way
};

 

  res.json({
    day: today,
    sessions: weeklyMenu[today]

  });

});

module.exports = router;