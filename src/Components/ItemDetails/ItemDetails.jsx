import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../api/Api';

function ItemDetails() {
    let parameters = useParams();
    const [details, setDetails] = useState(null);

    async function fetchData() {
        try {
            const fetchedDetails = await getDetails(parameters.id, parameters.type);
            setDetails(fetchedDetails);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []); 

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pb-3">
                        {details && (
                            <img className="w-100" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt='noooo'/>
                        )}
                    </div>
                    <div className="col-md-8 ">
                        {details && (
                            <>
                                <h2 className='pb-4'>{details.title || details.name}</h2>
                                {details.genres?.map((genre, index) => (
                                    <span key={index} className='badge p-2  mb-5'>{genre.name}</span>
                                ))}
                                <ul className="list-unstyled">
                                    <li className='pb-2'>Vote &nbsp;: &nbsp; {details.vote_average && details.vote_average.toFixed(1)}</li>
                                    <li className='pb-2'>Vote Count &nbsp;: &nbsp;  {details.vote_count}</li>
                                    <li className='pb-2'>Popularity &nbsp;: &nbsp; {details.popularity && details.popularity.toFixed(1)}</li>
                                    <li className='pb-5'>Release Date&nbsp; : &nbsp; {details.release_date || details.first_air_date}</li>
                                </ul>
                                <p className='trendp '>{details.overview}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetails;
