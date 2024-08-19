import { useEffect, useState } from "react";
import { fetchReviews } from "../../../services/movieAPI";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsById = async () => {
      try {
        const data = await fetchReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviewsById();
  }, [movieId]);

  return (
    <div>
      {!reviews.length && (
        <h2 className="font-bold text-xl">
          We don`t have any reviews for this movie
        </h2>
      )}
      {reviews.map((item) => (
        <ul key={item.id}>
          <li className="list-disc mb-2">
            <h2 className="font-bold">{item.author} :</h2>
          </li>
          <li className="mb-8">
            <p> " {item.content} "</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MovieReviews;
