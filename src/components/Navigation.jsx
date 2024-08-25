import css from './Navigation.module.css'

import clsx from "clsx"
import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <header className={css.linkblock}>
            <NavLink to="/" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Home</NavLink>
            <NavLink to="/movies" className={({ isActive }) => clsx(css.link, isActive && css.active)} >Movies</NavLink>
        </header>  
  )
}

export default Navigation