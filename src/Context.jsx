import React, { createContext, useState } from 'react'
import Context2 from './Context2'
export const Context = createContext()

const Context1 = () => {
    const [form,setForm] = useState(
        {
            name:'',
            pass:'',
            id:null
        }
    )

  return (
  <>
  <Context.Provider value={{form,setForm}}>
    <Context2/>
  </Context.Provider>
  
  </>
  )
}

export default Context1
