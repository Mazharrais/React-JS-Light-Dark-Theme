

import React, { useContext } from 'react'
import { Datatransfer } from './LightDark';
const DarkLight = () => {
     const {theme,handleToggle} = useContext(Datatransfer);
  return (
    <div className={`p-4 h-lvh flex flex-col justify-center items-center
     ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
      <h1 className={`my-4 text-xl ${theme === "light" ? "text-gray-800" : "text-white"}` }>Dark Light Mode Websites</h1>
      <p className={`my-4 text-xl ${theme === "light" ? "text-gray-800" : "text-white"}` }>Hello !! My React v18.3 Fans... </p>
      <button onClick={handleToggle}
      className='bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4'
      >{theme === "dark" ? "switch to Light Mode" : "switch to Dark Mode"}</button>
    </div>
  )
}

export default DarkLight;
