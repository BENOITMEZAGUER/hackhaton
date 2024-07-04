import "./Alerts.css";
import { useState } from "react";

function Alerts() {
  const [activeButton, setActiveButton] = useState();
  const [isSubmit, setIsSubmit] = useState();

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleSubmit = () => {
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 3000);
  };

  return (
    <>
      <h1 className="mainTitle">Nous alerter sur un sujet</h1>
      <p className="headerDescription">
        Ce formulaire vous permet de nous transmettre, de manière totalement
        anonymisée, une alerte liée à une discrimination que vous subissez, ou
        un dysfonctionnement de votre environnement de travail.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block buttonAlerts"
              onClick={() => handleButtonClick("materiel")}
            >
              Le problème est d'ordre matériel
            </button>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block buttonAlerts"
              onClick={() => handleButtonClick("harcelement")}
            >
              Le problème est lié à du harcèlement ou de la discrimination
            </button>
          </div>
        </div>
      </div>

      {activeButton === "materiel" && (
        <div className="radio-group mt-3 requestForm">
          <h2>Sélectionnez un sujet</h2>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="options"
              id="option1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="option1">
              Les installations et/ou accès PMR sont hors-service
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="options"
              id="option2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="option2">
              J'ai besoin de changer un élément de mon poste de travail
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="options"
              id="option3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="option3">
              J'ai besoin de conseils concernant l'aménagement de mon poste de
              travail
            </label>
          </div>

          <div>
            <label for="exampleTextarea" className="form-label mt-4">
              Complétez votre demande :
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
            ></textarea>
          </div>
          {isSubmit ? (
            <div className="alert alert-dismissible alert-success alertConf">
              <strong>Votre demande a été envoyée !</strong>
            </div>
          ) : (
            ""
          )}
          <button
            type="button"
            className="btn btn-primary submitButton"
            onClick={() => handleSubmit()}
          >
            Envoyer
          </button>
        </div>
      )}

      {activeButton === "harcelement" && (
        <div className="radio-group mt-3 requestForm">
          <h2>Sélectionnez un sujet</h2>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="options"
              id="option1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="option1">
              Je subis des menaces de la part de ma hiérarchie
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="options"
              id="option2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="option2">
              On me confie des tâches trop supérieures ou très inférieures à mes
              compétences
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="options"
              id="option3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="option3">
              Je suis victime de harcèlement au quotidien
            </label>
            <h3 className="anonymous">Anonymiser ma demande</h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                id="option1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="option1">
                Oui
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="options"
                id="option2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="option2">
                Non
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="exampleTextarea" className="form-label mt-4">
              Complétez votre demande :
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
            ></textarea>
          </div>
          {isSubmit ? (
            <div className="alert alert-dismissible alert-success alertConf">
              <strong>Votre demande a été envoyée !</strong>
            </div>
          ) : (
            ""
          )}
          <button
            type="button"
            className="btn btn-primary submitButton"
            onClick={() => handleSubmit()}
          >
            Envoyer
          </button>
        </div>
      )}
    </>
  );
}

export default Alerts;
