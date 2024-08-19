import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieById } from "../../../services/movieAPI";
import { useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");
  const [movieById, setmovieById] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then((data) => setmovieById(data));
  }, [movieId]);
  if (!movieById) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto mt-6 px-2">
      <Link
        className="inline-block mb-4 text-blue-600 hover:text-blue-800"
        to={goBackRef.current}
      >
        &larr; Go back
      </Link>

      <div className="flex flex-row lg: lg:space-x-8">
        <img
          className="w-full lg:w-1/3 object-cover"
          src={`https://image.tmdb.org/t/p/w500/${movieById.backdrop_path}`}
          alt={movieById.title}
        />
        <div className="mt-4 lg:mt-0 lg:w-2/3">
          <h1 className="text-3xl font-bold mb-4">
            {movieById.title} ({movieById.release_date.slice(0, 4)})
          </h1>

          <p className="mb-4">
            <span className="font-semibold">User Score: </span>
            {(movieById.vote_average * 10).toFixed(0)} %
          </p>

          <p className="font-semibold mb-2">Overview</p>
          <p className="mb-4">{movieById.overview}</p>

          <p className="font-semibold mb-2">Genres</p>
          <p className="mb-4">
            {movieById.genres.map((genre) => genre.name).join(" ")}
          </p>
        </div>
      </div>
      <div className=" border-t border-gray-300 pt-4 mt-4">
        <p className="font-bold text-xl mb-2">Additional Information</p>
        <ul className="space-y-2 list-disc">
          <li>
            <NavLink to="cast" className="text-blue-600 hover:text-blue-800">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className="text-blue-600 hover:text-blue-800">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
