import React, { useState } from "react";

function Survey() {
  const questions = [
    {
      id: 1,
      text: "Êtes-vous soumis à des contraintes de rythmes?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 2,
      text: "Vos objectifs sont-ils clairement définis?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 3,
      text: "Les objectifs fixés sont-ils compatibles avec les moyens et les responsabilités qui vous sont alloués?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 4,
      text: "Recevez vous des instructions, des ordres ou demandes qui peuvent être contradictoires entre eux?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 5,
      text: "Êtes vous amenés à changer de poste ou de fonctions à l'improviste pour répondre aux contraintes du moment?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 6,
      text: "Êtes vous fréquemment interrompus au cours de votre travail par des tâches non prévues?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 7,
      text: "Exercez vous des activités qui nécessitent une attention soutenue ou une vigilance permanente?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 8,
      text: "Arrive-t-il que vous travaillez plus de 45 heures par semaine?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 9,
      text: "Êtes vous contactés en dehors des horaires de travail pour des raisons professionnelles?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 10,
      text: "Connaissez-vous suffisamment à l'avance vos horaires de travail ou les changements éventuels dans vos plannings de travail?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 11,
      text: "Votre entreprise vous permet-elle de concilier vie professionnelle et vie personnelle?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 12,
      text: "Votre travail génère t-il des situations de tension avec un public extérieur?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 13,
      text: "Devez-vous faire bonne figure en toute circonstances?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 14,
      text: "Disposez vous de marges de manoeuvre dans la manière de réaliser votre travail dès lors que les objectifs sont atteints?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 15,
      text: "Pouvez vous interrompre momentanément votre travail quand vous en ressentez le besoin?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 16,
      text: "Pouvez vous utiliser vos compétences professionnelles et en utiliser de nouvelles?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 17,
      text: "Avez vous des possibilités d'entraide entre les salariés en cas de surcharge de travail ou de travail complexe?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 18,
      text: "Recevez vous un soutien de la part de l'encadrement?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 19,
      text: "Existe-t-il entre les employés des causes de désaccord ayant pour origine l'organisation du travail?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 20,
      text: "Recevez vous des marques de reconnaissance de leur travail de la part de l'entreprise ?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 21,
      text: " Considérerez vous votre travail utile et de qualité?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
    {
      id: 22,
      text: "Etes vous confrontés à des incertitudes quant au maintien de votre activité dans les prochains mois?",
      options: ["Jamais", "De temps en temps", "Souvent", "Toujours"],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [isSurveySend, setIsSurveySend] = useState();

  const handleCheckboxChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSurveySend(true);
  };

  const renderCheckboxes = () => {
    return questions.map((question) => (
      <div key={question.id}>
        <h6 className="mt-4">{question.text}</h6>
        {question.options.map((option, index) => (
          <div className="reponses">
            <label
              key={`question${question.id}-option${index}`}
              className="form-check-label"
            >
              <input
                className="form-check-input input-check-questionnaire"
                type="checkbox"
                value={(index + 1).toString()}
                onChange={(e) =>
                  handleCheckboxChange(
                    question.id,
                    e.target.checked ? e.target.value : null
                  )
                }
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <div>
        <h1 className="home">Questionnaire santé au travail</h1>
      </div>
      <div className="informations">
        <p>
          Nous tenons à vous informer que ce questionnaire est entièrement
          anonyme et aucune information ne sera transmise à l'entreprise. Vos
          réponses seront traitées de manière strictement confidentielle. Ce
          questionnaire vise à comprendre votre bien-être global, en particulier
          en ce qui concerne votre équilibre émotionnel au travail. Les données
          recueillies seront analysées par une intelligence artificielle
          bienveillante pour vous offrir des insights personnels. Nous
          souhaitons souligner que ce processus est conçu pour vous accompagner
          dans votre démarche vers un mieux-être psychologique, vous offrir des
          perspectives et, si nécessaire, vous orienter vers des ressources
          adaptées. N'hésitez pas à répondre en toute franchise, car la santé
          émotionnelle de chacun est importante. Votre participation contribue à
          créer un environnement de travail plus soutenant et épanouissant pour
          tous.
        </p>
      </div>
      <div className="formulaire-questionnaire">
        <form
          onSubmit={handleSubmit}
          data-dashlane-rid="a886061a28874446"
          data-form-type="other"
        >
          {renderCheckboxes()}

          <button type="submit" className="btn btn-primary btn-questionnaire">
            Soumettre
          </button>
        </form>
        {isSurveySend ? (
          <div class="alert alert-dismissible alert-warning">
            <h6>Resultats de l'analyse</h6>
            <p>
              Vos réponses indiquent un risque élevé de maladies psychosociales,
              avec un pourcentage de 75%. Vous pourriez être exposé à des
              troubles comme le stress chronique, l'épuisement professionnel
              (burn-out), et l'anxiété. Pour prévenir et traiter ces problèmes,
              il est essentiel de mettre en place des stratégies telles que la
              gestion du temps, la mise en place de moments de déconnexion, la
              recherche de soutien professionnel, et l'amélioration de
              l'équilibre entre vie professionnelle et vie personnelle.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Survey;
