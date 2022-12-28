import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { Link, useHistory } from 'react-router-dom';
import './Row.scss';

const baseUrl = 'https://image.tmdb.org/t/p/w400';

const Row = ({ title, fetchUrl, type }) => {
  const [posters, setPosters] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // get posters list

    axios.get(fetchUrl).then((resp) => {
      setPosters(resp.data.results);
    });
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h1 className='row__title'>{title}</h1>
      <div className='row__posters'>
        {posters
          ? posters.map(({ id, name, backdrop_path }) => (
              <img
                key={id}
                onClick={() => history.push(`/${type}/${id}`)}
                className='poster__backdrop'
                src={`${baseUrl}${backdrop_path}`}
                alt={name}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Row;
