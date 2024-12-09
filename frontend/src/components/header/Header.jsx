import "./Header.css"

import { NavLink } from "react-router";

function Header(){

    return(
        <header className="header">
            <div className="logo">
                <NavLink to="/" end>
                    <img src="/public/logo-header.png" alt="Logo" />
                </NavLink>
            </div>
            <div className="buttons">
                <nav className="recipe-buttons">
                    <NavLink to="/recipes" end>Recipes</NavLink>
                    <NavLink to="/add-recipe" end>Add Recipe</NavLink>
                </nav>
                <nav className="auth-buttons">
                    <NavLink to="/login" end className="login">Login</NavLink>
                    <NavLink to="/register" end>Register</NavLink>
                </nav>
            </div>
            
        </header>
    );
}

export default Header