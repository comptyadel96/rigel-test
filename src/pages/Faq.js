import React from "react"
import FaqDropdown from "../component/FaqDropdown"

function Faq() {
  return (
    <div className="flex  flex-col w-full h-screen  px-3 bg-gray-200 ">
      <h1 className="self-center text-center mb-5 pb-2 w-32 font-bold text-gray-700 text-3xl mt-3 md:text-6xl border-b-2 border-green-500  ">
        FAQ
      </h1>

      <FaqDropdown
        title="Les travailleurs sont ils agrées par Rigelni ?"
        text="Non , les travailleurs sont soit des artisans ou des travailleurs indépendants disposants d'un compte Rigelni dont l'identitée ne peut étre verifier a 100% ."
      />
      <FaqDropdown
        title="Rigelni impose des tarifs à ses travailleurs/clients ?"
        text="Non , Rigelni n'est pas responsable de la tarification des travailleurs/artisans avec leurs clients ."
      />
      <FaqDropdown
        title=" le travailleur pourra voir mes informations personnelles ?"
        text="Oui , si vous partagez votre mapId avec le travailleur il pourra voir votre nom,numéro de téléphone et votre position géographique sur google maps ."
      />
      <FaqDropdown
        title="Qui peut étre un travailleur avec Rigelni ?"
        text="Toute personne âgée de moins de 18 ans et qui détient un diplome ou d'un savoir faire qu'il lui permet de faire un travail de qualité ."
      />
      <FaqDropdown
        title="Puis-je désactiver mon compte et supprimer mes informations ?"
        text="Oui , vous pouvez supprimer vos informations personnelles et désactivez votre compte , Note: si vous étes un travailleur avec un abonnement actif , vous n'aurez pas le droit à un remboursement , pour plus d'informations consultez la section 'Données personnelles' ."
      />
      <FaqDropdown
        title="Rigelni est-elle disponible sur les appareils ios ?"
        text="Pour le moment Rigelni est seulement disponible sur android "
      />
    </div>
  )
}

export default Faq
