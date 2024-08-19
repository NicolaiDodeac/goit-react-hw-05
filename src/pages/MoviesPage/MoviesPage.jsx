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
    const fetchMovieByQuery = async () => {
      try {
        const data = await fetchMovieQuery(query);
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovieByQuery();
  }, [searchParams]);

  const handleSubmit = (value) => {
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
