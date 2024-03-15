import React, { useState } from 'react'
import { postData } from '../../api/Api';
import {useNavigate} from 'react-router-dom'
function Signup() {
   let navigate= useNavigate();
   let [loading,setLoading]=useState(false)
   let [Errors,setErrors]=useState('')
   let [FormData,setFormData]=useState(
    {
        name:'',
        // last_name:'',
        email:'',
        // age:'',
        password:''
    }
   );
   function getFormData({target}){
    setFormData({
        ...FormData,
        [target.name]:target.value
    })
   }

//    async function post(e){
//        e.preventDefault();
//        let response=await postData(FormData);
//        if(response.message=='success')
//         {      
//           navigate('/signin')
//         }
//         else{
//         setLoading(true);
//         // setErrors(response.AxiosError["message"])
//     }
//     console.log(Errors);
// }
  return (
    <>
      <h1 className='mb-2'>Registrasion</h1>
      <form className='frm' >
        <label htmlFor="name">First Name</label>
        <input autoComplete='true' onChange={getFormData} type="text" className='form-control my-2' name='first_name' id='first_name' />
        {/* <label htmlFor="last_name">Last Name</label> */}
        {/* <input autoComplete='true' onChange={getFormData} type="text" className='form-control my-2' name='last_name' id='last_name' /> */}
        <label htmlFor="email">Email</label>
        <input autoComplete='true' onChange={getFormData} type="email" className='form-control my-2' name='email' id='email' />
        {/* <label htmlFor="age">Age</label> */}
        {/* <input autoComplete='true' onChange={getFormData} type="number" className='form-control my-2' name='age' id='age' /> */}
        <label htmlFor="password">Password</label>
        <input autoComplete='true' onChange={getFormData} type="password" className='form-control my-2' name='password' id='password' />
        <label htmlFor="cpassword">Confirm Password</label>
        <input autoComplete='true' onChange={getFormData} type="password" className='form-control my-2' name='cpassword' id='cpassword' />
        <button type='submit' className='btn btn-outline-info float-end w-100'>{!loading?'Signup':<i className='fas fa-spinner fa-spin'></i>}</button>
      </form>
    </>
  )
}

export default Signup
