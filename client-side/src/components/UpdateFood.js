import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateFood = ({ match }) => {
  const [foodData, setFoodData] = useState({
    title: '',
    category: '',
    prix: '',
    description: '',
    image: null,
  });

  useEffect(() => {
    // Fetch the existing data for the food item to be updated
    const fetchFood = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/food/${match.params.id}`);
        setFoodData(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFood();
  }, [match.params.id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const file = type === 'file' ? e.target.files[0] : null;

    setFoodData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? file : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', foodData.title);
      formData.append('category', foodData.category);
      formData.append('prix', foodData.prix);
      formData.append('description', foodData.description);
      formData.append('image', foodData.image);

      const response = await axios.put(`http://localhost:5000/food/${match.params.id}`, formData);

      console.log('Food updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating food:', error.message);
    }
  };

  return (
    <div>
      <h2>Update Food</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={foodData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={foodData.category} onChange={handleChange} />
        </label>
        <br />
        <label>
          Prix:
          <input type="text" name="prix" value={foodData.prix} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={foodData.description} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" name="image" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Food</button>
      </form>
    </div>
  );
};

export default UpdateFood;
