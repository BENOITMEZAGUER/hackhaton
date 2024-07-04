import "./LabourRights.css";

function LabourRights() {
  return (
    <>
      <h1 className="pageTitle">Vos droits</h1>

      <p className="headerDescription">
        Le harcèlement au travail est prohibé par la loi. Moral ou sexuel, ce
        type de comportement est susceptible d'altérer la santé morale et/ou
        physique du salarié. Le Code du travail oblige l'employeur à prendre les
        mesures nécessaires en vue de prévenir de tels agissements, sous peine
        d'engager sa responsabilité même s'il est étranger à cette affaire.
        <br></br>
        Retrouvez ci-dessous l'ensemble des textes faisant référence au
        harcèlement au travail, et les actions qu'il est possible d'entreprendre
        à son encontre.
      </p>

      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              Légifrance
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <a
                href='https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000006160706/#:~:text=Aucun%20salari%C3%A9%20ne%20doit%20subir,de%20compromettre%20son%20avenir%20professionnel.'
                target='_blank'
              >
                Code du travail : Titre V : Harcèlements (Articles L1151-1 à
                L1155-2)
              </a>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Service public
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <a
                href='https://www.service-public.fr/particuliers/vosdroits/F2354'
                target='_blank'
              >
                Fiche pratique : Le harcèlement moral
              </a>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Travail-emploi.gouv
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <a
                href='https://travail-emploi.gouv.fr/droit-du-travail/egalite-professionnelle-discrimination-et-harcelement/article/le-harcelement-moral'
                target='_blank'
              >
                Ministère du travail : Le harcèlement moral
              </a>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingFour'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFour'
              aria-expanded='false'
              aria-controls='collapseFour'
            >
              Les Prudhommes
            </button>
          </h2>
          <div
            id='collapseFour'
            className='accordion-collapse collapse'
            aria-labelledby='headingFour'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <a
                href='https://www.saisirprudhommes.com/fiches-prudhommes/harcelement-moral#cookies-preference'
                target='_blank'
              >
                Harcèlement moral au travail : définition, preuves et
                dénonciation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LabourRights;
