import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./updateFood.css";
import { useNavigate } from "react-router-dom";

const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    category: "",
    prix: "",
    description: "",
    image: "null",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/food/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching food data:", error.message);
      }
    };

    fetchData();
  }, [id]);

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
  const handleButtonClick = () => {
    navigate("/food-list");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var fd = new FormData();
    fd.append("upload_preset", "mafud2x1");
    fd.append("tags", "browser_upload");
    fd.append("file", data.image);

    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    };

    const response1 = await axios.post(
      "https://api.cloudinary.com/v1_1/dnwtkw5gm/image/upload",
      fd,
      config
    );

    if (response1.data) {
      try {
        data.image = response1.data.url;
        const response = await axios.put(
          `http://localhost:5000/food/update/${id}`,
          {
            ...data,
          }
        );

        console.log("Food updated successfully:", response.data);
      } catch (error) {
        console.error("Error updating food:", error.message);
      }
    }
  };

  return (
    <div>
      <h2>Update Food</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Update Food</button>
      </form>
      <button onClick={handleButtonClick}>
        retour en arriere </button>
    </div>
  );
};

export default UpdateFood;
