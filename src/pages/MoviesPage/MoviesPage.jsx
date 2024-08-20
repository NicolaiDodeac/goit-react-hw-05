import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovieQuery } from "../../../services/movieAPI";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query === "") return;

    const fetchMovieByQuery = async () => {
      try {
        const data = await fetchMovieQuery(query);
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovieByQuery();
  }, [query]);

  const handleSubmit = (value) => {
    const params = new URLSearchParams(searchParams);
    params.set("query", value);
    setSearchParams(params);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
