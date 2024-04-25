import React, { useEffect, useState } from 'react'
import {Table,Button} from'semantic-ui-react'
import { API_URL } from './Url'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'

const Read = () => {
    const [apidata,setApidata] = useState([])
const navigate = useNavigate();

        const updatedata = ({firstname,lastname,checked,id}) =>{
        localStorage.setItem("id",id)
        localStorage.setItem("firstname",firstname)
        localStorage.setItem("lastname",lastname)
        localStorage.setItem("checked",checked)
        navigate('/update')
    }
        const deletedata = async (id) =>{
        try{
        await  axios.delete(`${API_URL}/${id}`);
        callGetapi()
      }
      catch(error){
        console.log(error);
      }
    }

    const callGetapi = async()=>{
    const resp =await axios.get(API_URL);
    setApidata(resp.data)
    }
    useEffect(()=>{
callGetapi()
    },[])

  return (
   <Table singleLine >
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>

        </Table.Row>
    </Table.Header>
    <Table.Body>
        {apidata.map(data=>(
             <Table.Row key={data.id}>
             <Table.Cell>{data.firstname}</Table.Cell>
             <Table.Cell>{data.lastname}</Table.Cell>
             <Table.Cell>{data.checked?'Checked':'Notchecked'}</Table.Cell>
             <Table.Cell>
                <Button onClick={()=>deletedata(data.id)}>Delete</Button>
             </Table.Cell>
             <Table.Cell>
                <Button onClick={()=>updatedata(data)}>Update</Button>
             </Table.Cell>
         </Table.Row>

        ))}
       
       
    </Table.Body>

</Table>

  )
}

export default Read