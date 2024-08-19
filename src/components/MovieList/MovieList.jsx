import { useEffect, useState } from "react";
import { fetchMovie } from "../../../services/movieAPI";
import { Link } from "react-router-dom";
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const movieData = await fetchMovie();
        setMovies(movieData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieList();
  }, []);

  return (
    <div>
      <h2 className="text-3xl mb-4">Trending today</h2>
      <ul className="flex flex-col gap-2">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
