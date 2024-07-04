import "./LabourRights.css";

function Schedule() {
  return (
    <>
      <h1 className="home">Mon Agenda</h1>
      <div className="headerDescription">
        Un salarié peut prétendre à des congés spéciaux en plus des
        traditionnels congés payés et jours fériés. Ces autorisations d'absences
        sont encadrées par une convention collective, un accord de branche ou
        d'entreprise. À défaut, ce sont les règles du Code du Travail qui
        s'appliquent.
      </div>
      <div className="btn-days-off">
        <button className="btn btn-primary">Voir mes jours restants</button>
      </div>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              En quoi consistent les congés spéciaux ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Les congés spéciaux permettent aux salariés de bénéficier de
              congés exceptionnels pour des raisons personnelles ou
              professionnelles. Ces congés sont soumis à conditions et se
              divisent en plusieurs catégories : <br />
              Les congés pour raisons familiales ; <br />
              Les congés pour création d'entreprise ; <br />
              Les congés pour formation ;<br /> Les congés pour convenances
              personnelles ;<br /> Les absences pour activités civiques et
              sociales.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Les congés spéciaux pour raisons familiales
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Le congé pour enfant malade permet à un salarié de s'absenter sans
              condition d'ancienneté. Le nombre de jours d'absence autorisé
              dépend de l'âge de l'enfant, du nombre d'enfants à charge et de la
              convention collective. Par exemple : enfant de moins d'un an : 5
              jours par an. enfant de plus d'un an : 3 jours par an. 3 enfants
              et + à charge : 5 jours par an. Le congé pour enfant malade ne
              donne habituellement pas droit à rémunération, sauf dispositions
              conventionnelles plus favorables. À savoir : le salarié doit
              transmettre à son employeur un certificat médical constatant la
              maladie ou l'accident de l'enfant pour justifier son absence.{" "}
              <br /> <br />
              Le congé pour mariage ou Pacs Un salarié qui se marie ou qui
              conclut un pacte civil de solidarité (Pacs) peut prétendre à 4
              jours de congés rémunérés, sans condition d'ancienneté. Il ne doit
              pas nécessairement poser son congé le jour même, mais au cours de
              la période où l'événement se produit, en accord avec l'employeur.
              Si c'est l'enfant du salarié qui se marie ou se pacse, il peut
              bénéficier d'une journée de congés payés. À savoir : si un salarié
              se pacse puis se marie la même année, il peut cumuler ses droits
              aux congés spéciaux (2*4 jours) et devra naturellement justifier à
              chaque fois de son absence. <br />
              <br />
              Le congé pour naissance ou adoption Un collaborateur peut
              bénéficier, sans condition d'ancienneté, de 3 jours ouvrables de
              congés rémunérés à l'occasion de l'arrivée d'un enfant dans son
              foyer. Ce congé spécial peut être cumulé avec le congé paternité
              et d'accueil de l'enfant, mais pas avec le congé maternité. Le
              congé pour naissance ou adoption devra être fixé en accord avec
              l'employeur, à une date proche de l'évènement. À savoir : la durée
              du congé pour naissance ou adoption ne peut être augmentée dans le
              cadre de naissances multiples ou d'adoption de plusieurs enfants
              (sauf dispositions conventionnelles plus favorables). Le congé
              parental d'éducation (à temps partiel ou à temps complet) Tout
              salarié de plus d'un an d'ancienneté peut, à l'occasion de
              l'arrivée d'un enfant dans son foyer (naissance ou adoption d'un
              enfant de moins de 16 ans), suspendre ou réduire son activité dans
              le cadre d'un congé parental d'éducation. D'une durée initiale
              d'un an, le congé parental d'éducation peut être prolongé
              plusieurs fois selon le contexte : 2 fois dans le cas de la
              naissance ou de l'adoption d'un seul enfant ; jusqu'à l'entrée à
              l'école maternelle des enfants en cas de naissances multiples ;
              jusqu'à 5 fois pour les naissances multiples d'au moins trois
              enfants ou les arrivées simultanées d'au moins trois enfants
              adoptés ou confiés en vue d'adoption. A son retour de congé, le
              salarié doit bénéficier d'un entretien professionnel dédié à son
              évolution professionnelle. À savoir : le salarié doit informer
              l'employeur au moins 1 mois à l'avance pour la demande initiale
              ainsi qu'à chaque renouvellement. Congés payés : droits,
              obligations, nouveautés réglementaires... <br />
              <br />
              Un salarié ayant à sa charge un enfant dont l'état de santé
              nécessite une présence soutenue ou des soins contraignants
              (maladie, handicap, accident) peut demander un congé de présence
              parentale. Sans condition d'ancienneté, ce congé spécial permet au
              salarié de bénéficier d'une réserve de 310 jours ouvrés d'absence
              non rémunérées sur une période de 3 ans. Ce congé spécial peut
              être prolongé au delà de 3 ans si l'état de l'enfant se dégrade ou
              nécessite toujours une présence soutenue. On observe depuis 2012
              des élans de solidarité prenant la forme de dons de RTT dans les
              entreprises où des salariés doivent s'occuper de leur enfant
              souffrant. Cette méthode permet au collaborateur de ne pas subir
              de baisse de rémunération. À savoir : le salarié doit faire sa
              demande initiale au moins 15 jours avant la date de la 1ère
              absence et joindre un certificat médical attestant de la gravité
              de la maladie ou du handicap de son enfant. Il devra ensuite
              informer l'entreprise 48h à l'avance de chaque absence. L'absence
              pour examens médicaux des futurs parents En plus des congés pour
              événements familiaux prévus par le code du travail, la loi Travail
              a introduit l'absence pour examens médicaux des futurs parents.
              <br />
              <br />
              Les salariés bénéficient ici d'une autorisation d'absence,
              rémunérée, pour se rendre à des examens médicaux obligatoires liés
              à la grossesse ou la procréation médicalement assistée. Trois
              situations génèrent un droit à congés qui s'ajoute aux congés
              payés : La surveillance médicale de la grossesse ; Les suites de
              l'accouchement ; L'assistance médicale à la procréation.
              Lorsqu'une salariée enceinte doit passer les examens médicaux
              obligatoires dans le cadre de la surveillance médicale de sa
              grossesse ou des suites de son accouchement, elle bénéficie de
              facto d'une autorisation d'absence. Ce droit est également ouvert
              aux salariées qui bénéficient d'une assistance médicale à la
              procréation. Le conjoint salarié, marié ou pacsé, bénéficie pour
              sa part d'une autorisation d'absence pour se rendre à trois
              examens médicaux obligatoires ou actes médicaux en cas de
              grossesse, suites d'accouchement ou assistance médicale à la
              procréation. L'exercice du droit à l'absence par le salarié
              concerné par les actes médicaux, comme pour son conjoint est
              considéré comme un temps de travail effectif. À savoir :
              l'employeur est dans l'obligation d'accorder cette absence. Il
              peut demander une attestation médicale établie par le médecin
              comme pièce justificative Le congé de solidarité familiale Le
              congé de solidarité familiale permet à un collaborateur d'assister
              un proche en fin de vie. Ce congé peut être pris en continu ou
              transformé en période d'activité à temps partiel. Le salarié fixe
              la durée du congé, dans la limite de 3 mois renouvelables une
              fois. L'employeur doit toutefois être prévenu 15 jours avant le
              début du congé. Le congé de solidarité familiale n'est pas
              rémunéré. À savoir : le salarié doit fournir à son employeur un
              certificat médical établi par le médecin traitant de la personne
              qu'il souhaite assister, attestant de son pronostic vital engagé.
              En cas de décès de la personne assistée, le congé prend fin dans
              les 3 jours suivant le décès. Le salarié peut alors cumuler des
              congés pour décès (détails plus bas).
              <br />
              <br />
              Le congé de proche aidant Depuis le 1er janvier 2017, les salariés
              peuvent bénéficier d'un nouveau congé spécial : le congé de proche
              aidant. Il leur permet de s'occuper de proches dépendants,
              malades, âgés ou handicapés. C'est un élargissement du périmètre
              du congé de soutien familial. Les amis et les personnes ayant des
              liens de proximité, sans qu'il existe pour autant un lien de
              famille, y ont aussi droit. Sa durée est de 3 mois renouvelables
              mais ne peut dépasser une année sur toute la carrière de l'aidant.
              Le salarié peut en bénéficier au bout de deux ans d'ancienneté
              dans l'entreprise. L'employeur ne peut pas refuser ce congé dès
              lors que le collaborateur peut présenter les justificatifs
              nécessaires mais il n'est pas contraint de le rémunérer. En cas
              d'accord entre l'employeur et le salarié, le congé de proche
              aidant peut être transformé en période de travail à temps partiel.
              À savoir : le salarié doit faire sa demande au moins 1 mois avant
              la date du début du congé et joindre un certificat médical
              attestant de la gravité de la maladie ou du handicap de son
              proche.
              <br />
              <br />
              Le congé pour décès Des journées de congés rémunérées sont prévues
              lorsqu'un collaborateur fait face au décès d'un proche. Ces
              journées s'ajoutent aux congés payés. Le code du travail prévoit
              des durées de congés différentes en fonction du lien avec la
              personne décédée : 7 jours pour le décès d'un enfant de moins de
              25 ans depuis le 1er juillet 2020 (contre 5 auparavant) ; 3 jours
              pour le décès du conjoint, du concubin ou du partenaire lié par un
              PACS, du père, de la mère, du beau-père, de la belle-mère, d'un
              frère ou d'une sœur.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Les congés pour convenances personnelles
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Un salarié peut souhaiter faire une pause de plusieurs mois dans
              son activité professionnelle. Cette absence peut prendre
              différentes formes. Le congé sans solde Le code du travail ne
              prévoit pas de cadre spécifique pour le congé sans solde. Son
              organisation se fait sur la base d'un consentement mutuel entre
              l'employeur et le salarié. Un accord d'entreprise peut toutefois
              prévoir un cadre spécifique notamment sur les conditions d'accès.
              Un congé sans solde n'est à priori pas rémunéré mais peut
              néanmoins être organisé dans le cadre d'un compte épargne temps.
              Le salarié peut alors utiliser les droits acquis pour bénéficier
              d'un maintien de rémunération, totale ou partielle. À savoir : le
              salarié peut exercer l'activité de son choix durant cette période.
              S'il souhaite travailler pour une autre entreprise, cette
              possibilité doit être spécifiquement écrite dans le contrat de
              travail ou une convention prévoyant les détails du congé sans
              solde.
              <br />
              <br />
              Le congé sabbatique Autre forme de congé pour convenance
              personnelle : le congé sabbatique. Sa durée varie généralement de
              6 mois minimum à 11 mois maximum. Une convention ou un accord
              d'entreprise peut toutefois prévoir des durées différentes. Pour
              en bénéficier, le salarié doit remplir l'ensemble des conditions
              suivantes : avoir au moins 3 ans d'ancienneté dans l'entreprise ;
              avoir effectué 6 années d'activité professionnelle ; ne pas avoir
              bénéficié au cours des 6 années précédentes : d'un projet de
              transition professionnelle (PTP) d'une durée d'au moins 6 mois,
              d'un congé pour création ou reprise d'entreprise, ou d'un
              précédent congé sabbatique. Il est tenu d'informer l'employeur au
              minimum 3 mois avant la date du départ souhaité. L'employeur a
              ensuite la possibilité : d'accepter la demande du salarié ; de
              reporter la date du congé pour organiser l'absence du salarié et
              assurer la bonne marche de l'entreprise ; de refuser cette
              demande. En l'absence de réponse de l'employeur dans un délai de
              30 jours, la demande est considérée comme accordée. Un congé
              sabbatique n'est pas rémunéré mais peut être financé par une
              partie des congés payés du salarié. Ils seront alors pris et payés
              à la date du congé. Attention : Le salarié peut exercer une autre
              activité professionnelle pendant son congé sabbatique mais doit
              toutefois respecter les conditions détaillées dans son contrat de
              travail (loyauté, non concurrence…).
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Les absences supplémentaire accordées par l'entreprise
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Les femmes qui le souhaitent ont droit à un jour de congé ou à une
              journée de télétravail supplémentaire par mois, au moment de leurs
              règles, sur simple demande dans cet agenda. <br />
              <br />
              Aussi toute personne ayant besoin d'un jour de congé pour fête
              religieuse peut en faire la demande spécifique via cette interface
              afin de ne pas avoir a se justifier auprès de son manager sur
              l'importance de son congé.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
