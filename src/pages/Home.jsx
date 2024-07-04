import { useNavigate } from "react-router-dom";
import "./pages.css";

function Home() {
  const navigate = useNavigate();

  const handlePage1 = () => {
    navigate("/questionnaire");
  };
  const handlePage2 = () => {
    navigate("/evenement");
  };
  const handlePage3 = () => {
    navigate("/agenda");
  };
  const handlePage4 = () => {
    navigate("/reserver-une-salle");
  };
  const handlePage5 = () => {
    navigate("/droit-du-travail");
  };
  const handlePage6 = () => {
    navigate("/alertes");
  };

  return (
    <>
      <h2 className="home">Accueil</h2>
      <div className="container accueil-container">
        <div className="row">
          <div className="col-md-4">
            <button
              onClick={handlePage1}
              className="btn btn-primary btn-lg btn-block btn-home"
            >
              Comment vous sentez-vous au travail ?
            </button>
          </div>
          <div className="col-md-4">
            <button
              onClick={handlePage2}
              className="btn btn-primary btn-lg btn-block btn-home"
            >
              Evenements inclusifs
            </button>
          </div>
          <div className="col-md-4">
            <button
              onClick={handlePage3}
              className="btn btn-primary btn-lg btn-block btn-home"
            >
              Mon agenda
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <button
              onClick={handlePage4}
              className="btn btn-primary btn-lg btn-block btn-home"
            >
              Reserver une salle
            </button>
          </div>
          <div className="col-md-4">
            <button
              onClick={handlePage5}
              className="btn btn-primary btn-lg btn-block btn-home"
            >
              Droit au travail
            </button>
          </div>
          <div className="col-md-4">
            <button
              onClick={handlePage6}
              className="btn btn-primary btn-lg btn-block btn-home"
            >
              Alertes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
