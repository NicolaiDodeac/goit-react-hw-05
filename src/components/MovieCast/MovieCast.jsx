import { useEffect, useState } from "react";
import { fetchCast } from "../../../services/movieAPI";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastById = async () => {
      try {
        const data = await fetchCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCastById();
  }, [movieId]);

  return (
    <div className="space-y-4">
      {cast.map((item) => (
        <ul className="flex flex-col gap-3" key={item.id}>
          <li className="flex items-start space-x-4">
            {item.profile_path && (
              <img
                className="w-20 h-20 object-cover rounded"
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
              />
            )}
          </li>
          <li className="list-disc">
            <h3 className="font-semibold">{item.name}</h3>
          </li>
          <li>
            <p className="text-gray-600">Character: {item.character}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default MovieCast;
