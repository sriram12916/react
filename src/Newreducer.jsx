import React, { useState } from 'react'
import { useReducer } from 'react'
const suba = (state,action)=>{
    switch(action.type){
        case "CREATE":
            return[...state,action.payload]
            case "DELETE":
                return state.filter((del)=>(del.id!==action.payload.id))
                case "UPDATE":
                    return state.map((updated)=>(updated.id===action.payload.id?action.payload.update3:updated))
          
    }

}

const Newreducer = () => {
    const[state,dispatch]= useReducer(suba,[])
const[input,setInput] = useState({
    name:"",
    pass:"",
    id:null
})
const handleSubmit =(e) =>{
    e.preventDefault();
    setInput({
        name:"",pass:"",id:""})
        
   if(input.id){
    dispatch({type:"UPDATE",payload:{id:input.id,
    update3:{
        name:input.name,
        pass:input.pass
    }}})
   }
    else{
dispatch({type:"CREATE",payload:{...input,id:Date.now()}})
    }
}
const handleDelete =(csk) =>{
    dispatch({type:"DELETE",payload:csk})
}
const handleUpdate =(rcbd) =>{
    setInput({
        name:rcbd.name,
        pass:rcbd.pass,
        id:rcbd.id
    })
}
  return (
  <>
<input
type='text'
name='username'
value={input.name}
onChange={(e)=>setInput({...input,name:e.target.value})}
/>
<input
type='password'
name='password'
value={input.pass}
onChange={(e)=>setInput({...input,pass:e.target.value})}
/>
<button onClick={handleSubmit}>Submit</button>
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

export default Newreducer