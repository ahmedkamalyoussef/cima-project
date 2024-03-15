import React, { useEffect, useState } from 'react'
import TopRatedItems from '../TopRatedItems/TopRatedItems'
import { topRated } from '../../api/Api';

function TopRated(props) {
    const [toprated, settoprated] = useState([]);
    async function fetchData() {
      try {
        const data = await topRated(props.type);
        settoprated(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <>
      <div className="container">
            <div className="row">
            <h1 className='text-center'>Top Rated {props.type=='tv'?"Tv Showes":"Movies"}</h1>
      {toprated.map((value, index) => (
        <TopRatedItems key={index} data={value} />
      ))}
      <div className="w-100 brdr justify-content-center mb-5"></div>
      </div>
      </div>
    </>
  )
}

export default TopRated
