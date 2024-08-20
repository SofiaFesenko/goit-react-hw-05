// https://api.themoviedb.org/3/search/movie?query=moon&api_key=ce1bdf60c90c5aff209d38216d693f24
// postman

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function MoviesPage() {

  const inputRef = useRef();
  const [inputValue, setinputValue] = useState("")

  function getinput(e) {
    e.preventDefault()
    setinputValue(inputRef.current.value)
  }

  const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchSingleMovie() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=ce1bdf60c90c5aff209d38216d693f24`
            );
            setMovie(response.data.results)
            console.log(response.data.results);
            
        }

        fetchSingleMovie();
    }, [inputValue]);
  

    return (
      <>
        <form action="" onSubmit={getinput}>
          <input type="text" ref={inputRef}/>
          <button type="submit" >search</button>
        </form>

        {Array.isArray(movie) && movie.length > 0 && (
          <ul>
          { movie.map((movie) => (
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

export default MoviesPage