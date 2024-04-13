import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTIzMDViNjYwZjAyNmMyZWYzOGZmMGNlMDE5Njc5NyIsInN1YiI6IjY2MGIwMmJhZTAzOWYxMDE3Y2U1M2MxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5YXVw_wfPV8SpRQb1CoYfOPcv4ZXEywqYMD3X6iisGo",
  },
};

export const getMovies = async () => {
  const url = "trending/movie/day?language=en-US";

  const response = await axios.get(url, options);

  return response.data;
};

export const getMovieId = async (movieId) => {
  const url = `/movie/${movieId}?language=en-US`;
  const response = await axios.get(url, options);
  return response.data;
};

export const getCast = async (movieId) => {
  const url = `/movie/${movieId}/credits?language=en-US`;
  const response = await axios.get(url, options);
  return response.data.cast;
};

export const getReviews = async (movieId) => {
  const url = `/movie/${movieId}/reviews?language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data.results;
};

export const getMoviesSearch = async (moviesFilter) => {
  const url = `/search/movie?query=${moviesFilter}&include_adult=false&language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data.results;
};
