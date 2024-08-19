import { useEffect, useState } from "react";
import { fetchCast } from "../../../services/movieAPI";
import { useParams } from "react-router-dom";
import seError from "../ErrorMessage/ErrorMessage";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const fetchCastById = async () => {
      try {
        setIsError(false);
        const data = await fetchCast(movieId);
        setCast(data);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
      }
    };

    fetchCastById();
  }, [movieId]);

  if (isError) {
    seError();
  } else {
    return (
      <div>
        <ul className="">
          {cast.map((item) => (
            <li
              // className="w-60 p-4 bg-amber-700 text-black rounded-xl flex flex-col "
              key={item.id}
            >
              {item.profile_path && (
                <img
                  // className="max-w-40 rounded-xl mb-4"
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                />
              )}
              <h3 className=" ">{item.name}</h3>
              <p className="">Character:{item.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
export default MovieCast;
