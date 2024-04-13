import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { getMovies } from "../../movie-api";
import css from "./HomePage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      {isLoading && <Loader></Loader>}
      {error && <ErrorMessage />}
      <div className={css.container}>
        {movies.length > 0 && <MovieList results={movies}></MovieList>}
      </div>
    </>
  );
}
