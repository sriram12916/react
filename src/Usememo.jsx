// import React, { useMemo, useState } from 'react'


// const Usememo = () => {
//     const[input,setInput] = useState(0);
//     const[dark,setDark] = useState(false);

   

//     const themeStyle = useMemo(()=>{
//       console.log("theme return")
//       return{
//       backgroundColor: dark? "black": "white",
//       color: dark? "white" : "black",}
//       },[dark])

      
    

//     const darkmode = useMemo(()=>{
//       return slowfunction(input)
//     },[input])

//   return (
//    <>
//    <input 
//    type='text'
//    value={input}
//    onChange={(e)=>setInput(e.target.value)}

//    />
//       <button onClick={()=>setDark((curr)=>!curr)}>Button</button>
//       <div style={themeStyle}>{darkmode}</div>
//    </>
//   )
// }

// export default Usememo

// function slowfunction(num){
//    console.log("running slow")
//    for (let i=0;i<1000000000 ;i++){}
//    return num*2;
// }

import React from 'react'
import { useState } from "react";
import { useMemo } from "react";



const Usememo = () => {
const[count,setCount] =useState(0)
const[todos,setTodos] = useState([])
const calculation =  useMemo(()=>expensiveFunction(count),[count])

const addtodo=()=>{
  setTodos((prev)=>[...prev,"Newtodos"])
}
const increment = () =>{
  setCount((curr)=>curr+1)
}


  return (
  <>
  <h2>todos</h2>
  {todos.map((todos)=>{
    console.log("Todos");
    return<p>{todos}</p>
  })
  }
<button onClick={addtodo}>Todos</button>
  
  <h2>Count:{count}</h2>
  <button onClick={increment}>increment</button>
  <h2>Expensive Calculation</h2>
  <p>{calculation}</p>

  </>
  )
}

export default Usememo

function expensiveFunction(num){
  console.log("Calculating...")
  for(let i=0;i<10000000;i++){}
  return num+1

}