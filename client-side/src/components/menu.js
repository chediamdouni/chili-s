import chil from "../Assets/chil.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Menu = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get("http://localhost:5000/food/");
      setFoods(response.data.foods);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  if (!foods) {
    return <div>Loading...</div>;
  }
  return (
    <div className="menu-section">
      <div className="title">
        <img src={chil} alt="logo" />
        <p>Notre Menu</p>
        <img src={chil} alt="logo" />
      </div>
      <hr className="separator" />
      <div className="subtitle">Nos Fajjitas</div>
      <div className="grid-container">
        {Array.isArray(foods) && foods.length > 0 ? (
          foods.map((food) => (
            <div key={food._id} className="card">
              <div className="card-img" style={{backgroundImage: `url(${food.image})`}}></div>
              <div className="container">
                <p style={{color: 'red'}}>{food.title}</p>
                {/* <p>{food.description}</p> */}
                <p style={{color: 'green', fontFamily: 'sans-serif', paddingTop: '10px', fontSize: '1rem'}}>{food.prix} DT</p>
              </div>
            </div>
          ))
        ) : (
          <p>no data available </p>
        )}{" "}
      </div>

      <div className="subtitle">Nos Fajjitas</div>
      <div className="grid-container">
        {Array.isArray(foods) && foods.length > 0 ? (
          foods.map((food) => (
            <div key={food._id} className="card">
              <div className="card-img" style={{backgroundImage: food.image}}></div>
              {/* <img className="card-img" src={food.image} alt="Avatar" /> */}
              <div className="container">
                <p>{food.title}</p>
                <p>{food.description}</p>
                <p>Price {food.prix} dt</p>
              </div>
            </div>
          ))
        ) : (
          <p>loading .. </p>
        )}{" "}
      </div>
    </div>
  );
};
export default Menu;
