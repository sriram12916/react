import React from 'react'
import { useEffect,useState } from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import axios from 'axios';
import { API_URL } from './Url';
import{useNavigate} from 'react-router-dom'

const Update = () => {
  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const [checked,setChecked] = useState(false);
  const [id,setId] = useState();
  const navigate = useNavigate()

const updatedata = async ()=>{
  try{
    await axios.put(`${API_URL}/${id}`,
     {firstname,
        lastname,
        checked})
  
  }
  catch(error){
    console.log(error)
  }
 
  
  navigate('/read') 
}
  useEffect(()=>{
   
    setFirstname(localStorage.getItem('firstname'))
    setLastname(localStorage.getItem('lastname'))
    setChecked (localStorage.getItem('!checked'))
    setId(localStorage.getItem('id'))
  },[]);

  return (
    <>
    <h4> Update Opreation</h4>
    <Form className='form'>
     <Form.Field>
        <label>First Name:</label>
        <input
        type='text'
        value={firstname}
        placeholder=' Enter First Name'
        onChange={(e)=>setFirstname(e.target.value)}
        />
        </Form.Field>   <br/>
        <Form.Field>
        <label>Last Name:</label>
        <input
         value={lastname}
        type='text'
      
        placeholder=' Enter Last Name'
        onChange={(e)=>setLastname(e.target.value)}
        />
        </Form.Field><br/>
        <Form.Field>
        <Checkbox label ="Agree the Terms &conditions "
        onChange={()=>setChecked(!checked)} />
        </Form.Field><br/>
        <Button onClick={ updatedata }>Update</Button>
    </Form>
    
    </>
  )
}

export default Update