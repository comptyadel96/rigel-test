import React from "react"
import Card from "./../component/Card"
import { IoMail, IoLogoFacebook } from "react-icons/io5"
import { FiHelpCircle, FiInfo, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen w-screen bg-green-700 m-0 p-0 ">
      {/* intro texts */}
      <div className="flex items-center flex-wrap justify-center ">
        {/* text 1 */}
        <div className="flex flex-col items-center max-w-lg bg-white mx-2  mt-6 p-3 rounded-xl md:ml-3 md:bg-glass  ">
          <h1 className="font-bold text-green-600 text-3xl md:text-white mb-3  ">
            Rigelni c'est quoi ?
          </h1>
          <p className="text-gray-700 font-bold md:text-gray-300 text-center">
            Rigelni est application mobile qui permet de mettre en relation des
            artisans / travailleurs avec leurs clientèles et de partager des
            informations professionnels et géographiques .
          </p>
        </div>
        {/* text 2 */}
        <div className="flex flex-col items-center max-w-lg bg-white mx-2   mt-6 p-3 rounded-xl md:ml-3 md:bg-glass   ">
          <h1 className="font-bold text-green-600 text-3xl md:text-white mb-3 text-center ">
            Comment télécharger l'application ?
          </h1>
          <p className="text-gray-700 font-bold md:text-gray-300 text-center">
            Pour télécharger l'application Rigelni , il vous suffit juste de
            vous rendre sur la platforme GooglePlay (play Store) et de taper le
            nom de "Rigelni" sur la barre de recherche .
          </p>
        </div>
        {/* text 3 */}
        <div className="flex flex-col items-center max-w-lg bg-white mx-2 mb-2   mt-6 p-3 rounded-xl md:ml-3 md:bg-glass  ">
          <h1 className="font-bold text-green-600 text-3xl md:text-white mb-3 ">
            Rigelni est-elle gratuite ?
          </h1>
          <p className="text-gray-700 font-bold md:text-gray-300 text-center">
            Oui,Rigelni est totalement gratuite pour les clients à la recherche
            d'artisans/travailleurs .
          </p>
        </div>
      </div>
      <h1 className="md:text-3xl md:ml-3 md:mt-8 text-center text-xl mt-4 text-white">
        Vue d'ensemble de l'application Rigelni
      </h1>
      {/* présentation de l'appli (capture d'écran) */}
      <div className="flex mt-3 md:mx-3 flex-wrap overflow-auto justify-evenly  p-0  ">
        <Card
          photo="/images/tof3.png"
          title="Bienvenue"
          description="faites comme chez vous , aprés tous c votre maison qui va accueillir le travailleur ."
        />
        <Card
          photo="/images/tof1.png"
          title="Inscrivez-vous"
          description="Un travailleur ? Faisons connaissance et montrez-nous ce que vous savez faire de mieux dans votre domaine 😎"
        />
        <Card
          photo="/images/tof2.png"
          title="Tapez et trouvez"
          description="Le client est roi ... choisissez le service ainsi que le travailleur qui vous convient le mieux 👑 "
        />

        <Card
          photo="/images/tof4.png"
          title="Affaire conclue ? "
          description="Dans ce cas , vous savez ce qu'il vous reste à faire , rendez-vous sur notre application 😃"
        />
      </div>
      {/* footer */}
      <footer className="w-screen  bg-green-900 flex items-center justify-evenly    mt-8 flex-wrap">
        {/* text */}
        <div className="flex items-center flex-col lg:flex-row   justify-evenly   flex-wrap ">
          <p className="text-white font-bold">contact</p>
          <p className="flex items-center text-white  md:mx-4 ">
            <IoMail className="text-gray-400 text-xl" />
            <p className="ml-2 ">rigelni-dz@hotmail.com</p>
          </p>
          <a
            href="https://www.facebook.com/Rigelni-105551161890020"
            className="flex items-center text-white  md:mx-4 "
          >
            <IoLogoFacebook className="text-gray-400 text-3xl" />
            <p className="ml-2">Page Facebook officiel </p>
          </a>
        </div>
        {/* mini nav */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly  ml-2">
          <Link to="/FAQ" className="flex items-center  text-white md:mr-3">
            Faq <FiHelpCircle className="ml-1" />
          </Link>
          <Link to="/privacy-policy" className="flex items-center text-white md:mr-3">
            conditions d'utilisation <FiInfo className="ml-1" />
          </Link>
          <Link to="/personal-data" className="flex items-center text-white md:mr-3">
            Données personnelles <FiLock className="ml-1" />
          </Link>
        </div>
        <p className=" mb-1 mx-5 text-gray-400">rigelni© 2021</p>
      </footer>
    </div>
  )
}

export default Home
