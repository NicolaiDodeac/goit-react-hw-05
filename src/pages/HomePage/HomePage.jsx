import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovie } from "../../../services/movieAPI";

const HomePage = () => {
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
      <h2 className="text-3xl ml-4 mb-4">Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
