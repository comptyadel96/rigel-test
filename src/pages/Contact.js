import React from "react"
import { IoMail, IoLogoFacebook } from "react-icons/io5"
function Contact() {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <h1 className="text-center font-bold text-gray-600 text-3xl mt-5 ">
        Contactez nous
      </h1>
      <p className="mt-7">
        Pour avoir plus d'informations vous pouvez nous contacter sur cet
        adresse email
      </p>
      <p className="mt-5 text-green-700 font-serif font-bold flex items-center">
        <IoMail size={20} className="mr-2" /> Email : rigelni-dz@hotmail.com
      </p>

      <a
        href="https://www.facebook.com/Rigelni-dz-105551161890020"
        target="_blank"
        rel="noreferrer"
        className="mt-5 text-blue-700 font-serif font-bold flex items-center"
      >
        <IoLogoFacebook size={30} className="mr-2" color="dodgerblue" /> Page
        facebook
      </a>
    </div>
  )
}

export default Contact
