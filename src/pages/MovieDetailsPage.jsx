import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"

import css from './MovieDetailsPage.module.css'

function MovieDetailsPage() {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchSingleMovie() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=ce1bdf60c90c5aff209d38216d693f24`
            );
            setMovie(response.data)
        }

        fetchSingleMovie();
    }, [movieId]);

    if (movie == null) {
        return <p>loading</p>
    }

    const moviePicture = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`

    return (
      <>
        <Link to="/">go back</Link>
        <div className={css.block}>
            <img src={moviePicture} alt="raewfar" />  
            <div>
                <h3>{movie.title}</h3>
                <span>User score: {movie.vote_average}</span>
                <h5>Overview</h5>
                <p>{movie.overview}</p>
                <h5>Genres</h5>
                {movie.genres.map((genre) => {
                    return <span>{genre.name} </span>
                })}
                
            </div>  
        </div>
        <div>
            <p>Additional information</p>
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
        </div>
        <div><Outlet/></div>
           
      </>
    )
  }
  
export default MovieDetailsPage
