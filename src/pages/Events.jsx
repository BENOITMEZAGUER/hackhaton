/* eslint-disable react/no-unescaped-entities */
import "./Events.css";

function Events() {
  return (
    <>
      <h1 className="events-title">
        L'agenda
        <small className="text-body-secondary-">
          Vos rendez-vous bien-être
        </small>
      </h1>

      <div className="card border-primary mb-3-2">
        <div className="card-header">Inclusivité au Travail</div>
        <div className="card-body">
          <h4 className="card-title">Déjeuner Inclusif - Mardi 16 juillet</h4>
          <p className="card-text">
            Un déjeuner pour discuter de l'inclusivité au sein des entreprises.
            Experts et collègues partageront leurs expériences et proposeront
            des solutions pratiques pour créer un environnement de travail plus
            inclusif.
          </p>
        </div>
      </div>

      <div className="card border-primary mb-3-2">
        <div className="card-header">Bien-être au Travail</div>
        <div className="card-body">
          <h4 className="card-title">Déjeuner Bien-être - Jeudi 18 juillet</h4>
          <p className="card-text">
            Rejoignez-nous pour un déjeuner axé sur le bien-être au travail.
            Nous discuterons de stratégies pour réduire le stress et améliorer
            la santé mentale des employés, avec des interventions de
            spécialistes du bien-être.
          </p>
        </div>
      </div>

      <div className="card border-primary mb-3-2">
        <div className="card-header">Sensibilisation aux Handicaps</div>
        <div className="card-body">
          <h4 className="card-title">
            Déjeuner Sensibilisation - Mardi 23 juillet
          </h4>
          <p className="card-text">
            Ce déjeuner vise à sensibiliser les employés aux divers handicaps et
            à promouvoir une culture d'inclusion et de respect. Des témoignages
            et des discussions aideront à mieux comprendre les défis rencontrés
            par les personnes en situation de handicap.
          </p>
        </div>
      </div>

      <div className="card border-primary mb-3-2">
        <div className="card-header">Diversité et Inclusion</div>
        <div className="card-body">
          <h4 className="card-title">Déjeuner Diversité - Jeudi 25 juillet</h4>
          <p className="card-text">
            Un déjeuner pour explorer comment les entreprises peuvent bénéficier
            d'une force de travail diverse et inclusive. Des discussions sur les
            meilleures pratiques et les politiques inclusives seront au cœur de
            cet événement.
          </p>
        </div>
      </div>

      <div className="card border-primary mb-3-2">
        <div className="card-header">Santé Mentale au Travail</div>
        <div className="card-body">
          <h4 className="card-title">
            Déjeuner Santé Mentale - Mardi 30 juillet
          </h4>
          <p className="card-text">
            Un événement dédié à la santé mentale au travail. Les discussions
            porteront sur l'importance de reconnaître et de traiter les
            problèmes de santé mentale, avec des conseils pratiques pour les
            employeurs et les employés.
          </p>
        </div>
      </div>
      <div className="modal-event">
        <div className="modal-event-dialog" role="document">
          <div className="modal-event-content">
            <div className="modal-event-header">
              <h5 className="modal-event-title">Envie de proposer un thème?</h5>
              <button
                type="button"
                className="event-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-event-body">
              <textarea
                className="event-text"
                placeholder="Notez vos idées ici!"
              ></textarea>
            </div>
            <div className="event-modal-footer">
              <button type="button" className="btn btn-primary">
                Envoyer
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
        <div className="padding-bas"></div>
      </div>
    </>
  );
}

export default Events;
