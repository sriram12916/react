import React from 'react'
import { useState } from 'react'


const Content = () => {
const[input,setInput] = useState("")
const[pass,setPass] = useState("")
const[type,setType] = useState(false)

const[result,setResult] = useState([])
const[id,setId] = useState(null)

 const handlesubmit = (e)=>{
 e.preventDefault();
 if(input!==""&&pass!==""){
  if(id){

  const update ={
    input :input,
    pass :pass,
    id:id
     
  }
  setResult(result.map((name)=>name.id===id?update:name))
 }
 else{
  setResult([...result,{input,pass,id:Math.random()}])
 }
}
 
  setInput("");
  setId("")
  setPass("");
  setType(true);
 
 }
const handleDelete = (id)=>{
  setResult(result.filter((item) => item.id !== id))

}
const handleUpdate = (name) =>{
  setInput(name.input)
  setPass(name.pass)
  setId(name.id)
}

  return (
    <> 
    <label>Enter your Name:</label>
    <input 

    type='text'
    name='username'
  id='1'
    value={input}
    onChange={(e)=> setInput(e.target.value)}
    />
    <label>Enter your Password:</label>
    <input 
    type='password'
    name='password'
 id='2'
    value={pass}
    onChange={(e)=>setPass(e.target.value)}
    />
   
    <button onClick={handlesubmit}>submit</button>
{type&&
<table>
  <tr>
    <th>S.No</th>
    <th>Name</th>
    <th>Password</th>
    <th>Action</th>
    
  </tr>

<tbody>
  {result.map((name,index)=>(
    <tr key ={index}>
      <td>{index+1}</td>
      <td>{name.input}</td>
      <td>{name.pass}</td>
      <td>
          <button onClick={()=>handleDelete(name.id)}>Delete</button>
          <button onClick={()=>handleUpdate(name)}>Update</button>
     </td>
      
    </tr>
  ))}
</tbody>
</table>
}
    </>
  )
}

export default Content
