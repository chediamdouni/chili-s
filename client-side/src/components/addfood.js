import axios from "axios";
import React, { useState } from "react";
import "./AddFood.css";
import { Navigate } from "react-router-dom";

const AddFood = () => {
  const [data, setData] = useState({
    title: "",
    category: "",
    prix: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  const handleSubmit = async (e) => {
    console.log(data.image);
    e.preventDefault();
    var fd = new FormData();
    fd.append("upload_preset", "mafud2x1");
    fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
    fd.append("file", data.image);
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    };
    const response1 = await axios.post(
      "https://api.cloudinary.com/v1_1/dnwtkw5gm/image/upload",
      fd,
      config
    );
    console.log(response1);
    if (response1.data) {
      console.log(response1.data);
      try {
        data.image = response1.data.url
        const response = await axios.post("http://localhost:5000/food/new", {
          ...data
        });
        // Handle the success response
        console.log("Food added successfully:", response.data);
      } catch (error) {
        // Handle the error response
        console.error("Error adding food:", error.message);
      }
    }
  };

  return (
    <div className="add-food-container">
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit} className="add-food-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={data.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Prix:
          <input
            type="text"
            name="prix"
            value={data.prix}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
          />
        </label>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};
export default AddFood;
