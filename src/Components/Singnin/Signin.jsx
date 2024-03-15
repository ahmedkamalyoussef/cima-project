import React, { useState } from 'react'
import { postData } from '../../api/Api';
import {useNavigate} from 'react-router-dom'
function Signin() {
    let navigate= useNavigate();
    let [loading,setLoading]=useState(false)
    let [Errors,setErrors]=useState('')
    let [FormData,setFormData]=useState(
     {
         email:'',
         password:''
     }
    );
    function getFormData({target}){
     setFormData({
         ...FormData,
         [target.name]:target.value
     })
    }
 
//     async function post(e){
//         e.preventDefault();
//         let response=await postData(FormData,'signin');
//         if(response.message=='success')
//         {
//             navigate('/home')
//          }
//          else{
//         //  setLoading(true);
//          // setErrors(response.AxiosError["message"])
//      }
//      console.log(Errors);
//  }
   return (
     <>
       <h1 className='mb-2'>Login</h1>
       <form className='frm' onSubmit={post}>
         <label htmlFor="email">Email</label>
         <input autoComplete='true' onChange={getFormData} type="email" className='form-control my-2' name='email' id='email' />
         <label htmlFor="password">Password</label>
         <input autoComplete='true' onChange={getFormData} type="password" className='form-control my-2' name='password' id='password' />
         <button type='submit' className='btn btn-outline-info float-end w-100'>{!loading?'Signin':<i className='fas fa-spinner fa-spin'></i>}</button>
       </form>
     </>
   )
}

export default Signin
