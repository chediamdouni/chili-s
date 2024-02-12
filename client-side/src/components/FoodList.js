import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./FoodList.css";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get("http://localhost:5000/food/");
      setFoods(response.data.foods);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  return (
    <table className="food-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>Prix</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {Array.isArray(foods) && foods.length > 0 ? (
        foods.map((food) => (
          <tr key={food._id}>
            <td>{food.title}</td>
            <td>{food.category}</td>
            <td>{food.prix}</td>
            
            <td>
              <Link to={`/food-detail/${food._id}`}>View</Link>{" "}
              <Link to={`/edit-food/${food._id}`}>Edit</Link>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4">No data available</td>
        </tr>
      )}
    </tbody>
  </table>
  );
};

export default FoodList;
