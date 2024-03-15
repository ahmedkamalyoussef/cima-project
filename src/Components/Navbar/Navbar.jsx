import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { setSearch } from '../../Slices/SearchSlice';
export default function Navbar(props) {
  let focus=useRef();
  let dispatcher=useDispatch()
  const [showSearchForm, setShowSearchForm] = useState(false);
  const toggleSearchForm = () => {
      setShowSearchForm(!showSearchForm);
      
    };
    useEffect(()=>{
      showSearchForm!==false?focus.current.focus():focus.current.blur();
    },[showSearchForm])
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mb-5">
  <div className="container">
    <NavLink className="navbar-brand" to="/home"><h1>Cima</h1></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movies">Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/tv">Tv Show</NavLink>
        </li>
        
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
        <button onClick={toggleSearchForm}  style={{backgroundColor: 'transparent', border: 'none'}}>
          <i className="fa fa-search" style={{color: 'aliceblue'}}></i></button>
          
        <input ref={focus} onBlur={toggleSearchForm} onChange={(event)=>dispatcher(setSearch(event.target.value))}  
        className="form-control rounded nav-item bg-transparent bg-white" placeholder="Search..." 
         style={{borderRadius: 20, transition: 'transform 0.9s ease',
          color: '#fff',display: showSearchForm ? 'inline-block' : 'none'}} />
        
      </ul>
      </ul>
      {
        !props.auth?<>
        <ul className="navbar-nav  mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link" to="/signin">Signin</NavLink>
        </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Signup</NavLink>
        </li>
      </ul>
        </>:<>
        <ul className="navbar-nav  mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link" to="/signin">Logout</NavLink>
        </li>
      </ul>
        </>
      }
    </div>
  </div>
</nav>
    </>
  )
}
