import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./ItemSelectedPage.scss";
import YouTube from "react-youtube";
import Row from "../Row/Row";

const API_KEY = "596b7722ce42d224b229b0d98a7b902f";
const topRated = `top_rated?api_key=${API_KEY}&with_networks=213&language=en-US`;
const recommendations = `recommendations?api_key=${API_KEY}&with_networks=213&language=en-US`;

const ItemSelected = (props) => {
  const { id, type } = props.match.params;
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `/${type}/${id}/videos?api_key=${API_KEY}`
      );
      const url = request.data.results[0]?.key;
      if (url) {
        setTrailerUrl(url);
      }
    };
    fetchData();
  }, [id, type]);

  return (
    <main>
      <div className="itemSelected">
        <div className="itemSelected__trailer">
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
        <Row
          title="Recommendations"
          fetchUrl={`/${type}/${id}/${recommendations}`}
          type={type}
        />
        <Row title="Top Rated" fetchUrl={`/${type}/${topRated}`} type={type} />
      </div>
    </main>
  );
};

export default ItemSelected;
