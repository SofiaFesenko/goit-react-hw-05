import { NavLink, Route, Routes } from 'react-router-dom'
import { clsx } from 'clsx'
import { lazy, Suspense } from 'react'

import css from './App.module.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage'))
const MovieDetalsPage = lazy(() => import('./pages/MovieDetailsPage'))
const MovieReviews = lazy(() => import('./components/MovieReviews '))
const MovieCast = lazy(() => import('./components/MovieCast'))

function App() {


  return (
    <>
    <header className={css.linkblock}>
      <NavLink to="/" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Home</NavLink>
      <NavLink to="/movies" className={({ isActive }) => clsx(css.link, isActive && css.active)} >Movies</NavLink>
    </header>
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetalsPage />} >
            <Route path="cast" element={<MovieCast/>}/>
            <Route path="reviews" element={<MovieReviews/>}/>
          </Route>
        </Routes>
      </Suspense>
      
    </main>
    
    </>
  )
}

export default App
