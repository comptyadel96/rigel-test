import React from "react"

function Card({ photo, title, description }) {
  return (
    <div className=" flex items-center m-0 w-auto md:flex-col md:max-w-sm md:m-4 p-3 rounded-xl md:bg-glassHover ">
      <img
        alt="description-service"
        src={photo}
        className="md:h-auto md:w-auto h-80 w-44 "
      />
      <div className="flex flex-col items-center">
        <h1 className="md:text-geen-600 text-gray-700 text-2xl font-bold text-center">
          {title}
        </h1>
        <p className="mx-2 text-center text-white md:text-white ">{description}</p>
      </div>
    </div>
  )
}

export default Card
