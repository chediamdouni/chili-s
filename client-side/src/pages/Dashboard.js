import axios from "axios";
import { useEffect, useState } from "react";
import chil from "../Assets/chil.png";
import logg from "../Assets/logg.png";

const Dashboard = () => {
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
    <>
      <div className="home-section-container">
        {/* <img className="home-background-image-container" src={chilis} alt="foulayfel" /> */}
        <div className="home-section-text">
          <p>Chili's Tunisie</p>
          <div className="home-section-hook">
            Découvrez les meilleurs recettes syriennes
          </div>
          <button className="home-button">Voir notre menu</button>
        </div>
      </div>
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
                <div
                  className="card-img"
                  style={{ backgroundImage: `url(${food.image})` }}
                ></div>
                <div className="container">
                  <p style={{ color: "red" }}>{food.title}</p>
                  {/* <p>{food.description}</p> */}
                  <p
                    style={{
                      color: "green",
                      fontFamily: "sans-serif",
                      paddingTop: "10px",
                      fontSize: "1rem",
                    }}
                  >
                    {food.prix} DT
                  </p>
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
                <div
                  className="card-img"
                  style={{ backgroundImage: `url(${food.image})` }}
                ></div>
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
      <div className="About-section">
        <div className="About-title">Prendre Contact</div>
        <div className="About-form-group">
          <div className="About-form">
            <input
              className="input"
              id="Nom"
              name="nom"
              placeholder="Nom et Prenom"
              type="text"
            />
            <input
              className="input"
              id="email"
              name="email"
              placeholder="Adresse Email"
              type="email"
            />
            <input
              className="input"
              id="description"
              name="description"
              placeholder="Votre message ici ..."
              type="text"
            />
            <button className="About-button">Envoyer</button>
          </div>

          <img className="About-img " src={logg} alt="logo" />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
