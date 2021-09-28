import React, { useRef } from "react"
import {
  FiAlignJustify,
  FiXOctagon,
  FiHelpCircle,
  FiInfo,
  FiLock,
  FiFeather,
  FiHome
} from "react-icons/fi"
import { Link } from "react-router-dom"

function BurgerNav() {
  const iconRef = useRef(null)
  const openNav = () => {
    iconRef.current.classList.remove("w-0")
    iconRef.current.classList.add("w-52")
  }
  const closeNav = () => {
    iconRef.current.classList.remove("w-52")
    iconRef.current.classList.add("w-0")
  }
  return (
    <>
      <FiAlignJustify
        className="absolute top-4 right-3 md:top-4 md:right-8 cursor-pointer bg-glass rounded-full p-2 hover:bg-glassHover "
        size={44}
        color="white"
        onClick={openNav}
      />
      {/* burger content */}
      <div
        ref={iconRef}
        className="overflow-x-hidden h-screen w-0 fixed z-10  top-0 right-0 bg-gray-800 pt-8 md:pt-16 transition-all duration-700"
        onClick={closeNav}
      >
        <FiXOctagon
          className="absolute right-2 top-1 cursor-pointer"
          color="crimson"
          size={30}
        />
        <Link
          to="/"
          className="cursor-pointer flex items-center p-2 text-white hover:text-green-500 "
        >
          Acceuil <FiHome size={17} style={{ marginLeft: "6px" }} />
        </Link>
        <Link
          to="/FAQ"
          className="cursor-pointer flex items-center p-2 text-white hover:text-green-500 "
        >
          FAQ <FiHelpCircle size={17} style={{ marginLeft: "6px" }} />
        </Link>
        <Link
          to="/personal-data"
          className="cursor-pointer flex items-center mt-4 p-2 text-white hover:text-green-500 "
        >
          Données personnelles
          <FiLock size={17} style={{ marginLeft: "6px" }} />
        </Link>
        <Link
          to="/contact-us"
          className="cursor-pointer flex items-center mt-4 p-2 text-white hover:text-green-500 "
        >
          Contactez-nous <FiFeather size={17} style={{ marginLeft: "6px" }} />
        </Link>
        <Link
          to="/privacy-policy"
          className="cursor-pointer flex mt-4  p-2 px-4 text-white hover:text-green-500 "
        >
          Conditions générales d'utilisation
          <FiInfo size={28} />
        </Link>
      </div>
    </>
  )
}

export default BurgerNav
