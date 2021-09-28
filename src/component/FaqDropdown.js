import React, { useRef, useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
function FaqDropdown({ title, text }) {
  const [isDown, setIsDown] = useState(false)
  const textRef = useRef(null)
  const showText = () => {
    textRef.current.classList.remove("hidden")
    textRef.current.classList.add("block")
    setIsDown(true)
  }
  const hideText = () => {
    textRef.current.classList.remove("block")
    textRef.current.classList.add("hidden")

    setIsDown(false)
  }
  return (
    <div className=" relative py-3 bg-white max-w-lg mt-3 mx-auto w-80 rounded-xl p-0 mb-4 border-2 border-green-300  ">
      {!isDown ? (
        <FiChevronDown
          className="absolute right-1 top-1/3 cursor-pointer bg-gray-100 rounded-full  "
          size={24}
          onClick={showText}
          color="#55c990"
        />
      ) : (
        <FiChevronUp
          className="absolute right-0 cursor-pointer "
          size={24}
          onClick={hideText}
          color="crimson"
        />
      )}
      <h1 className="ml-2 font-serif font-bold text-green-600 ">{title}</h1>

      <p
        ref={textRef}
        className=" text-gray-600 font-serif p-3 max-w-md cursor-default hidden "
      >
        {text}
      </p>
    </div>
  )
}

export default FaqDropdown
