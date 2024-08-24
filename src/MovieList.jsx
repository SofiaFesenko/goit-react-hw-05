import { Link } from "react-router-dom"

function MovieList({movie, location}) {
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