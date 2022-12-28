export const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const request = {
  fetchPopular: `/tv/popular?api_key=${API_KEY}&with_networks=213&language=en-US&page=1`,
  fetchKidsTV: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_genres=10762`,
  fetchShowTv: `/discover/tv?api_key=${API_KEY}&with_networks=213&`,
  fetch_US_TV: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_origin_country=US`,
  fetchCrimeDramaTV: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_genres=80,18`,
  fetchAnimeSeries: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_genres=16,35`,
  fetchCartoonsTv: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=10770`,
  fetchDocumentary: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_genres=99`,
  fetchActionAdvTv: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_genres=10759`,
  fetchActionAdvMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=12,28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=10749`,
};

export default request;
