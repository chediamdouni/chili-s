import chilis from "../Assets/chilis.png";
const Home = () => {
  return (
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
 
  );
};
export default Home;
