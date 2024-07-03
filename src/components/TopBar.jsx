import { Link } from "react-router-dom";

function TopBar() {
  return (
    <>
      <p>logo</p>
      <Link to="/">Accueil</Link>
      <button>Connexion</button>
    </>
  );
}

export default TopBar;
