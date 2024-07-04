import { useNavigate } from "react-router-dom";
import "./components.css";

function TopBar() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="top-bar-container">
      <div className="top-bar-uni">
        <img src="/ensemble.jpg" alt="ensemble" style={{ width: "20%" }} />
        <p>Unis</p>
      </div>
      <div className="top-bar-links">
        <button className="btn btn-secondary" onClick={handleHome}>
          Accueil
        </button>
        <button className="btn btn-primary">Connexion</button>
      </div>
    </div>
  );
}

export default TopBar;
