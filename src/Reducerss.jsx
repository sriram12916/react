import React, { useReducer, useState } from 'react'
const ram =(state,action) =>{
  switch(action.type){
    case "CREATE":
      return [...state,action.payload]
      case "DELETE":
        return state.filter((deleted)=>(deleted.id!==action.payload.id))
        case"UPDATE":
        return state.map((update)=>(update.id === action.payload.id ? action.payload.update2 : update))
  } 

}
const Reducerss = () => {
  const[state,dispatch] =useReducer(ram,[])
  const[input,setInput] = useState({
    name:"",
    pass:"",
    id:null
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    setInput({
      name:"",
      pass:""
    })
    if(input.id){
      dispatch({type:"UPDATE",payload:{
        id:input.id,
        update2:{
name:input.name,
pass:input.pass,
          
        }
      }})

    }
    else{
      dispatch({type:"CREATE",payload:{...input,id:Date.now()}})
    }
   
  }
  
  const handleDelete = (remove)=>{
    dispatch({type:"DELETE",payload:remove})
  }
  const handleUpdate = (update)=>{
   setInput({
    name:update.name,
    pass:update.pass,
    id:update.id
   })
  }
  return (
    <>
    <input
    type='text'
    name="username"
    value={input.name}
    onChange={(e)=>setInput({...input,name:e.target.value})}
    />
     <input
    type='text'
    name="password"
    value={input.pass}
    onChange={(e)=>setInput({...input,pass:e.target.value})}
    />
    <button onClick={handleSubmit}>submit</button>
    <table>
      <tr>
        <th>S.NO</th>
        <th>NAME</th>
        <th>PASSWORD</th>
        <th>ACTION</th>
      </tr>
      <tbody>
        {state.map((data,index)=>(
          <tr key={data.id}>
          <td>{index+1}</td>
          <td>{data.name}</td>
          <td>{data.pass}</td>
          <td>
            <button onClick={()=>handleDelete(data)}>Delete</button>
            <button onClick={()=>handleUpdate(data)}>Update</button>
          </td>

        </tr>

        ))}
        
      </tbody>
    </table>
    </>
  )
}

export default Reducerss