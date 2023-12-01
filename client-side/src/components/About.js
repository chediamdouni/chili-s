import logg from "../Assets/logg.png";

const About = () => {
  return (
    <div className="About-section">
      <div className="About-title">Prendre Contact</div>
      <div className="About-form-group">
        <div className="About-form">
          <input className="input" id="Nom" name="nom" placeholder="Nom et Prenom" type="text" />
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
        
          <img className="About-img "src={logg} alt="logo" />
        
      </div>
    </div>
  );
};
export default About;
