import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./Banner.scss";
import { API_KEY } from '../../requests'

const Banner = () => {
  const [serie, setSerie] = useState({});

  useEffect(() => {


    async function fetchData() {

    // get series data 

      const requestSeries = await axios.get(requests.fetchPopular);
      const seriesData = requestSeries.data.results;

    // choose random serie

      const randomSerieId =
        seriesData[Math.floor(Math.random() * (seriesData.length - 1))].id;
      const requestSerie = await axios.get(
        `/tv/${randomSerieId}?api_key=${API_KEY}&language=en-US`
      );
      setSerie(requestSerie.data);
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "auto 110%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(
          https://image.tmdb.org/t/p/original${serie?.backdrop_path}
        )`,
        backgroundPosition: "right center",
        zIndex: -1,
      }}
    >
      <div className="banner__leftShadow" />
      <div className="banner__body">
        <h1 className="banner__title">{serie?.name || serie?.original_name}</h1>
        <ul className="banner__info">
          <li className="banner__item">
            {serie.first_air_date ? serie.first_air_date.slice(0, 4) : null}
          </li>
          <li className="banner__item">{serie?.number_of_seasons} Seasons</li>
          <li className="banner__item">{serie?.status}</li>
        </ul>
        <div className="banner__content">{truncate(serie?.overview, 150)}</div>
      </div>
      <div className="banner__bottomShadow" />
    </div>
  );
};

export default Banner;
