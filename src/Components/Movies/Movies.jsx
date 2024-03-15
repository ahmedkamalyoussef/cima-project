import React, { useEffect, useState } from 'react';
import Item from '../item/item';
import {trending} from '../../api/Api';
import Loading from '../Loading/Loading';
import { Offline} from 'react-detect-offline';
import {useSelector} from "react-redux"
import TopRated from '../TopRated/TopRated';
function Movies() {
  let {searchVal}= useSelector((search)=>search.search);

  const [movies,setMovies]=useState([]);
  const [movies2,setMovies2]=useState([]);

  async function fetchData() {
    try {
      const data = await trending('movie');
      setMovies(data);
      setMovies2(data);

    } catch (error) { 
      console.error('Error fetching data:', error);
    }
    
  }

  useEffect(() => { 
    setMovies2(
      movies.filter(movie => movie.title.toLowerCase().includes(searchVal.toLowerCase())));
    },[searchVal]); 

  useEffect(() => {
    fetchData();
}, []); 
  return (
    <>
    <Offline><Loading/></Offline>
    {searchVal===""?<TopRated type="movie"/>:""}
    { movies.length>0? <div className="container">
        <div className="row">
         
          {movies2.length>0?movies2.map((value,index)=><Item key={index} data={value}/>):<h1 className='nores'>No Result...</h1>}
        </div>
      </div>:<Loading/> }
    </>
  )
}

export default Movies
