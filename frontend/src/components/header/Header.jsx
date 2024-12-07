import "./Header.css"

function Header(){

    return(
        <header className="header">
            <div className="logo">
                <img src="/public/logo-header.png" alt="Logo" />
            </div>
            <div className="buttons">
                <nav className="recipe-buttons">
                    <a href="#recipes">Recipes</a>
                    <a href="#add-recipe">Add Recipe</a>
                </nav>
                <nav className="auth-buttons">
                    <a href="#login" className="login">Login</a>
                    <a href="#register">Register</a>
                </nav>
            </div>
            
        </header>
    );
}

export default Header