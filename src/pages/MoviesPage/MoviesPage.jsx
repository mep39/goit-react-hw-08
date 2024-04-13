import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { getMoviesSearch } from "../../movie-api";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params] = useSearchParams();
  const moviesFilter = params.get("query") ?? "";

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMoviesSearch(moviesFilter);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [moviesFilter]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(moviesFilter.toLowerCase())
    );
  }, [moviesFilter, movies]);

  return (
    <>
      {isLoading && <Loader></Loader>}
      {error && <ErrorMessage />}
      <MoviesFilter></MoviesFilter>
      <div className={css.container}>
        {filteredMovies.length > 0 && (
          <MovieList results={filteredMovies}></MovieList>
        )}
        {!filteredMovies.length && moviesFilter && (
          <p>After your query information is absent</p>
        )}
      </div>
    </>
  );
}
