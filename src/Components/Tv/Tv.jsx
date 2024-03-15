import React, { useEffect, useState } from 'react';
import Item from '../item/item';
import {trending} from '../../api/Api';
import Loading from '../Loading/Loading';
import { Offline} from 'react-detect-offline';
import {useSelector} from "react-redux"
import TopRated from '../TopRated/TopRated';
export default function Tv() {
  let {searchVal}= useSelector((search)=>search.search);

  const [tv,setTv]=useState([]);
  const [tv2,setTv2]=useState([]);
  async function fetchData() {
    try {
      const data = await trending('tv');
      setTv(data);
      setTv2(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => { 
      setTv2(
        tv.filter(show => show.name.toLowerCase().includes(searchVal.toLowerCase())));
      },[searchVal]); 

  useEffect(() => {
    fetchData();
}, []); 
  return (
    <>
    <Offline><Loading/></Offline>
    {searchVal===""?<TopRated type="tv"/>:""}
    { tv.length>0? <div className="container">
        <div className="row">
          {tv2.length>0?tv2.map((value,index)=><Item key={index} data={value}/>):<h1 className='nores'>No Result...</h1>}
        </div>
      </div>:<Loading/> }
    </>
  )
}
