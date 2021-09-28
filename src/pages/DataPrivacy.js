import React from "react"

function DataPrivacy() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-center font-bold text-gray-700 text-4xl mt-4">
        Données personnelles
      </h1>
      <h1 className="mt-4 text-gray-700 font-bold text-xl">
        Quelles sont les informations personnelles des utilisateurs enregistrer
        et utiliser sur l'application Rigelni ?
      </h1>
      <h1 className="text-green-600 font-bold mt-3">
        1-Les informations personnelles des travailleurs / artisans :
      </h1>
      <p className="text-gray-500">1-Nom et prénom</p>
      <p className="text-gray-500">2-adresse email</p>
      <p className="text-gray-500">3-Numéro de téléphone</p>
      <p className="text-gray-500">
        4-Photo de profil du compte Facebook ou Google
      </p>
      <p className="text-gray-500">5-Données géographique</p>
      <p className="text-gray-500">
        6-Informations professionnelles ( Métier- Spécialité - Services...etc )
      </p>
      <p className="text-gray-500">
        7-Données relatives au compte ( Date de création - Date de modification
        ... etc )
      </p>
      <h1 className="text-green-600 font-bold mt-3">
        2-Les informations personnelles des clients :
      </h1>
      <p className="text-gray-500">1-Nom et prénom</p>
      <p className="text-gray-500">2-Adresse email</p>
      <p className="text-gray-500">3-Numéro de téléphone</p>
      <p className="text-gray-500">4-Données géographique</p>
      <p className="text-gray-500">
        5-Données relatives au compte ( Date de création - Date de modification
        ... etc )
      </p>
      <h1 className="mt-4 text-gray-700 font-bold text-xl">
        Comment désactiver mon compte et supprimer mes informations d'une façon
        définitive de l'application Rigelni ?
      </h1>
      <p className="text-gray-500">1-Rendez-vous sur l'écran Profil</p>
      <img
        alt="delete user account and informations"
        src="/images/delete.png"
        className="mx-auto max-w-xs md:max-w-sm my-3"
      />
      <p className="text-gray-500 my-2">
        2- tapez simplement sur le bouton Désactiver mon compte .
      </p>
      <img
        alt="confirm delete user account"
        src="/images/confirmdelete.png"
        className="mx-auto max-w-xs md:max-w-sm my-3"
      />
      <p className="text-gray-500">
        3- tapez sur oui pour confirmer . 
      </p>
      <p className="text-gray-500">
        4- C'est fini .... vous allez nous manquer 😓  . 
      </p>
    </div>
  )
}

export default DataPrivacy
