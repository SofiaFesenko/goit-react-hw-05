import { Link, useLocation } from "react-router-dom"

function MovieList({movie, location}) {
  const loccation = useLocation()
  console.log(loccation);
  
      return (
        <> 
          {Array.isArray(movie) && movie.length > 0 && (
            <ul>
            { movie.map((movie) => (
              <li key={movie.id}>
                <Link state={{from: location}} to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
          )}
        </>
    )
}
  
export default MovieList