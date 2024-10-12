

import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import DarkLight from './DarkLight';

export const Datatransfer = createContext();

const LightDark = () => {
  
    const [theme,setTheme] = useState('dark');

  const handleToggle = ()=>{
    setTheme((prev) =>(prev === "dark" ? "light" : "dark"))
  }


  return (
    <Datatransfer.Provider value={{theme:theme, handleToggle:handleToggle}}>
    <>
      <DarkLight />
    </>

    </Datatransfer.Provider>
  )
}

export default LightDark;
