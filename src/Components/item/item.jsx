import React from 'react'
import { Link } from 'react-router-dom';

function Item(props) {
  let { title, overview, poster_path, vote_average, name, id, media_type } = props.data;
  return (
    <div className="col-md-2 col-sm-3 my-3"> {/* Adjust column size to 4 for md screens */}
      <Link to={`/details/${id}/${media_type}`} className='text-decoration-none '>
        <div className="item position-relative overflow-hidden">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className='w-100 movim' alt={title || name} />
          <div className="overlay d-flex align-items-center text-center position-absolute p-3">
            <p>{overview.split(' ').slice(0, 13).join(' ')}</p>
          </div>
          <div className="vote position-absolute p-2">{vote_average.toFixed(1)}</div>
        </div>
        <div className="title d-flex align-items-center">
           <p className='text-center p-0 mb-0 mt-2'>{title || name}</p>
        </div>
      </Link>
    </div>
  )
}

export default Item;
