import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./FoodDetails.css";
const FoodDetail = () => {
  const [food, setFood] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("Food Detail ID:", id);
    console.log("Food Detail Data:", food);
  }, [id, food]);

  
  useEffect(() => {
    const fetchFoodDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/food/${id}`);
        setFood(response.data.food);
        
      } catch (error) {
        console.error("Error fetching food details:", error.message);
      }
    };

    fetchFoodDetail();
  }, [id]);

  return (
    <div className="food-detail-container">
      <h2>Food Details</h2>
      {food ? (
        <div>
          <img className="image-container" src={food.image} alt=""  />

          <p className="food-detail-text">
            <strong style={{ color: "red" }}>Title:</strong> {food.title}
          </p>
          <p className="food-detail-text">
            <strong style={{ color: "red" }}>Category:</strong> {food.category}
          </p>
          <p className="food-detail-text">
            <strong style={{ color: "red" }}>Prix:</strong> {food.prix} DT
          </p>
          <p className="food-detail-text">
            <strong style={{ color: "red" }}>Description:</strong> {food.description}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FoodDetail;
