import { Formik,Form,Field,ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Texterror from './Texterror'

const Demo = () => {
    const initialValues = {
        name: '',
        email: "",
        password: "",
        comments:'',
        address:''
    }
    const onSubmit =
        values => {
            console.log(values)
        }
   

    const validationSchema = Yup.object({
        name: Yup.string().required('Required!'),
        email: Yup.string().required('Email Invalid Format').required('Required!'),
        password:Yup.string().required('Required!'),
        comments:Yup.string().required('Required!'),
        address: Yup.string().required("Required!")
    })

    
   

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        
        >
            <Form >
                <div className='form-control'>
                    <label htmlFor='name'>Name:</label>
                    <Field type='name'
                        id='name'
                        name='name'
                    
                    />
                      <ErrorMessage name='name'
                       component = {Texterror}/>
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email:</label>
                    <Field type='email'
                        id='email'
                        name='email'
                        />

                   <ErrorMessage name='email'>
                    {
                        (props)=><div className='error'>{props}</div>
                    }
                   </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='password'>Password:</label>
                    <Field type='password'
                        id='password'
                        name='password'
                       />
                      <ErrorMessage name='password' component={Texterror}/>
                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>Comments:</label>
                    <Field as='textarea'id='comments' name='comments' placeholder='textarea'/>
                    <ErrorMessage name='comments' component={Texterror}/>
                </div>
<div className='form-control'>
    <label htmlFor='address'>Address:</label>
   <Field name='address'>
    {sri =>{
        const {field, meta} = sri
        console.log("feild render", sri)
        return(
            <div>
                <input type='text' id='address' {...field}/>
                {meta.touched && meta.error ? <div  className='error'>{meta.error} </div> : null }

            </div>
        )
    }}
   </Field>
</div>


                <button type='submit'>Submit</button>

            </Form>


        </Formik>

    )
}

export default Demo