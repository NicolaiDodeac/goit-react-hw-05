import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className="flex gap-2 justify-start pl-16">
      <ul className="flex flex-col gap-3">
        {movies.map((movie) => (
          <li className="list-disc" key={movie.id}>
            <Link
              className="text-blue-600 hover:text-blue-700 "
              to={`/movies/${movie.id.toString()}`}
              state={location}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
