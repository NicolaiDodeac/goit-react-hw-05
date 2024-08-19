import axios from "axios";

const url = "https://api.themoviedb.org/3";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTY3NzRmNDY5ZmU0Y2E2M2ZlM2M4Y2MwOTFiYzk1ZCIsIm5iZiI6MTcyMzkxOTIzNi40NjAxMjcsInN1YiI6IjY2YzBlOTY5NGYyNDA2N2UzZTAzYzE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zP6OhN9OvYJ55YeEhV5KWXT6VycxUMAI1aQIaCPQU8",
  },
};

export const fetchMovie = async () => {
  const { data } = await axios.get(
    `${url}/trending/movie/day?language=en-US`,
    options
  );
  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(
    `${url}/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

export const fetchCast = async (castId) => {
  const { data } = await axios.get(
    `${url}/movie/${castId}/credits?language=en-US`,
    options
  );
  return data.cast;
};

export const fetchReviews = async (movieId) => {
  const { data } = await axios.get(
    `${url}/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );

  return data.results;
};

export const fetchMovieQuery = async (query) => {
  const { data } = await axios.get(
    `${url}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data.results;
};

// // const url =
// //   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// // const options = {
// //   headers: {
// //     // Замість api_read_access_token вставте свій токен
// //     Authorization:
// //       "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTY3NzRmNDY5ZmU0Y2E2M2ZlM2M4Y2MwOTFiYzk1ZCIsIm5iZiI6MTcyMzkxOTIzNi40NjAxMjcsInN1YiI6IjY2YzBlOTY5NGYyNDA2N2UzZTAzYzE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zP6OhN9OvYJ55YeEhV5KWXT6VycxUMAI1aQIaCPQU8",
// //   },
// // };

// // axios
// //   .get(url, options)
// //   .then((response) => console.log(response))
// //   .catch((err) => console.error(err));

// // import axios from "axios";

// // export const fetchImages = async (query, page) => {
// //   try {
// //     const res = await axios.get("https://api.unsplash.com/search/photos", {
// //       params: {
// //         query,
// //         per_page: 20,
// //         page,
// //         client_id: "BcX-mIO6E9o29CuldtNqNJelZf50Lfo-COWnIkMj8MM",
// //       },
// //     });
// //     return res.data;
// //   } catch (error) {
// //     console.error("Error fetching photos:", error);
// //   }
// // };
