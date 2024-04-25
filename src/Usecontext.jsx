import React, { createContext, useContext, useState } from 'react'
const userContext = createContext();
const Usecontext = () => {
   
    const[user] = useState("this is sriram!")
  return (
    <userContext.Provider value={user}>
    <h1>ParentElement</h1>
<Component1 user={user}/>
    </userContext.Provider>
  )
}

export default Usecontext

function Component1(){
    return(
        <>
        <h1>Component1</h1>
       <Component2 />
       </>
      
    )
   
}

function Component2(){
    return(
        <>
     <h1>Component2</h1>
     <Component3 />
    </>
    )
    
   
}

function Component3(){
    return( <>
        <h1>Component3</h1>
        <Component4 />
       
       </>
       )
   

}

function Component4(){
    return(
        <>
        <h1>Component4</h1>
        <Component5 />
       </>
      
    )
   
}

function Component5(){
    const user = useContext(userContext);
    return(
        <>
    
     <h1>Component5</h1>
    <h2>{ `hello ${user}`}</h2>
    </>
    )
    
   
}