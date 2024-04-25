import React, { useState } from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import { API_URL } from './Url'
import axios from 'axios';
import{useNavigate} from 'react-router-dom'




const Create = () => {
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [checked,setChecked] = useState(false);
    const navi = useNavigate()
    const postdata = async()=>{
     await axios.post(API_URL,{
            firstname,
            lastname,
            checked
        })
        
     navi('/read')  
    }
    

  return (
    <>
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
        <Button onClick={postdata}>Submit</Button>
    </Form>
    </>
   
  )
}

export default Create