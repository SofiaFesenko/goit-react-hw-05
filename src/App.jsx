import { NavLink, Route, Routes } from 'react-router-dom'
import { clsx } from 'clsx'

import css from './App.module.css'

import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import MovieDetalsPage from './pages/MovieDetailsPage'
import MovieReviews from './MovieReviews '
import MovieCast from './MovieCast'

// API Key
// ce1bdf60c90c5aff209d38216d693f24
// API Read Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTFiZGY2MGM5MGM1YWZmMjA5ZDM4MjE2ZDY5M2YyNCIsIm5iZiI6MTcyNDA1NzA0MS4zMTU4NDMsInN1YiI6IjY2YzMwNDBjMjc0MjRlY2RiYjZlMzViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eulP8lqSk49aP8TqaZ54FvJAsCBsbA-8Vpa0cWnS4Tc

function App() {


  return (
    <>
    <header className={css.linkblock}>
      <NavLink to="/" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Home</NavLink>
      <NavLink to="/movies" className={({ isActive }) => clsx(css.link, isActive && css.active)} >Movies</NavLink>
    </header>
    <main>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetalsPage />} >
          <Route path="cast" element={<MovieCast/>}/>
          <Route path="reviews" element={<MovieReviews/>}/>
        </Route>
      </Routes>
    </main>
    
    </>
  )
}

export default App
