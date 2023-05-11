import { BrowserRouter, Navigate } from "react-router-dom"
import { Routes, Route, NavLink } from "react-router-dom"

import logoReact from '../assets/react.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img id="logoReact" src={logoReact} alt="ReactLogo"/>
                <ul>
                    {/* isActive es una prop qe propia de navlink, 'nav-active' un custom style en index.css */}
                    <li>
                        <NavLink  to="/home"  className={({isActive}) => isActive? 'nav-active': ''}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink  to="/about" className={({isActive}) => isActive? 'nav-active': ''}>About</NavLink>
                    </li>

                    <li>
                        <NavLink  to="/users" className={({isActive}) => isActive? 'nav-active': ''}>Users</NavLink>
                    </li>
                </ul>
            </nav>
        <Routes>
            <Route path="about" element={<h1>About page</h1>}/>
            <Route path="users" element={<h1>Users page</h1>}/>
            <Route path="home"  element={<h1>Home page</h1>}/>
            <Route path="/*"    element={<Navigate to={"/home"} replace/>}/>
        </Routes>
        
        </div>
    </BrowserRouter>
  )
}

// nota:  
// LINK funciona como un <a></a>
// NavLink tb, con la dif que puede determinar la ruta actual.
// util para poner clase activo dependiendo si esta en la ruta no

// Navigate replace: para qe No pueda regresar a pagina anterior una vez redireccionado