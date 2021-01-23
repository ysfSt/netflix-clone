import React from "react";
import Banner from "../Banner/Banner";
import request from "../../requests";
import Row from "../Row/Row";

const Home = (props) => {
  return (
    <main className='home'>
      <Banner />
      <Row title="Popular" fetchUrl={request.fetchPopular} type={"tv"} />
      <Row title="Kid's TV" fetchUrl={request.fetchKidsTV} type={"tv"} />
      <Row
        title="Crime TV Drama"
        fetchUrl={request.fetchCrimeDramaTV}
        type={"tv"}
      />
      <Row
        title="Anime Series"
        fetchUrl={request.fetchAnimeSeries}
        type={"tv"}
      />
      <Row
        title="Action Adventure TV"
        fetchUrl={request.fetchActionAdvTv}
        type={"tv"}
      />
      <Row
        title="Action Adventure Movies"
        fetchUrl={request.fetchActionAdvMovies}
        type={"movie"}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={request.fetchComedyMovies}
        type={"movie"}
      />
      <Row
        title="Romance Movies"
        fetchUrl={request.fetchRomanceMovies}
        type={"movie"}
      />
      <Row
        title="Horror Movies"
        fetchUrl={request.fetchHorrorMovies}
        type={"movie"}
      />
      <Row
        title="Documentaries"
        fetchUrl={request.fetchDocumentary}
        type={"movie"}
      />
    </main>
  );
};

export default Home;
