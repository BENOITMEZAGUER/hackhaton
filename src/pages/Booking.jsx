function Booking() {
  return (
    <>
      <h1 className="home">Reserver une salle</h1>
      <div className="informations">
        <p>
          Vous souhaitez reserver une salle pour allaiter, prier, ou tout autre
          besoin personnel, vous êtes au bon endroit ! <br />
          Attention la reservation de cette salle n'est pas à de fins
          professionnelles, d'autres salle sont a disposition sur le site de
          reservation habituelle de l'entreprise.
        </p>
      </div>
      <img
        src="/public/reservation-salle.jpg"
        alt="agenda de reservation de salle"
        className="img-fluid"
      />
      <div className="padding-bas"></div>
    </>
  );
}

export default Booking;
