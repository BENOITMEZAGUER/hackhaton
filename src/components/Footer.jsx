import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./components.css";

function Footer() {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleFooterPosition = () => {
      const footer = document.querySelector(".footer-container");
      const isFooterFixed = footer.offsetHeight < window.innerHeight;
      setIsSticky(!isFooterFixed);
    };

    handleFooterPosition();

    const handleResize = () => {
      handleFooterPosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  const footerClass = isSticky
    ? "sticky-bottom footer-container"
    : "fixed-bottom footer-container";

  return (
    <div className={footerClass}>
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
