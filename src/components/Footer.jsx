import "./components.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-uni">
        <img src="/ensemble.jpg" alt="ensemble" style={{ width: "10%" }} />
        <h4>2gether</h4>
      </div>
      <div className="footer-links">
        <p>
          Réalisé par Benoît Mezaguer, Mathieu Delfosse, Alexandre Lebeau,
          Elodie Regnier <br />
          Grace à l'analyse de Faker Jelass, Christophe Lamand, Selyan Elachachi
        </p>
      </div>
    </div>
  );
}

export default Footer;
