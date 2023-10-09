import React, { createContext, useState } from 'react'
export const MyContext = createContext();


const Context = ({children}) => {
const [valueOne, setValueOne] = useState("") 



const info = {valueOne, setValueOne}
  return (
    <div>
        <MyContext.Provider value={info} >
             {children}
        </MyContext.Provider>
    </div>
  )
}

export default Context
