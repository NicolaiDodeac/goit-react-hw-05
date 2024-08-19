import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "../../../services/movieAPI";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieById, setmovieById] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then((data) => setmovieById(data));
  }, [movieId]);
  if (!movieById) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieById.backdrop_path}`}
          alt=""
        />
        <p>Additional Information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
      <h1>
        {movieById.title} {movieById.release_date}
      </h1>
      <p>Overview</p>
      <span>{movieById.overview}</span>
      <p>Genres</p>
      <span>{movieById.genres.map((genre) => genre.name).join(", ")}</span>
    </div>
  );
};

export default MovieDetailsPage;
