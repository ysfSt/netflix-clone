import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
import "./Row.scss";


const baseUrl = "https://image.tmdb.org/t/p/w400";

const Row = ({ title, fetchUrl, type }) => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {

    // get posters list 
    
    axios.get(fetchUrl).then((resp) => {
      setPosters(resp.data.results);
    });
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {posters
          ? posters.map(({ id, name, backdrop_path }) => (
              <Link key={id} to={`/${type}/${id}`}>
                <img
                  className="poster__backdrop"
                  src={`${baseUrl}${backdrop_path}`}
                  alt={name}
                />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default Row;
