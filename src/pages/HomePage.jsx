import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomePage() {

    const [movies, setMovies] = useState(null);
    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get(
                "https://api.themoviedb.org/3/trending/movie/day?api_key=ce1bdf60c90c5aff209d38216d693f24"
            );
            setMovies(response.data.results)
        }

        fetchMovies();
      }, []);

    return (
      <>
        <h1>Trending today</h1>
        {Array.isArray(movies) && movies.length > 0 && (
        <ul>
          { movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      </>
    )
}
  
export default HomePage