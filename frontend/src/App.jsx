import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./components/home/Home.jsx"
import AddRecipe from "./components/add-recipe/AddRecipe.jsx";

import "./App.css"
import Recipes from "./components/recipes/Recipes.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Forgot_Password from "./components/forgot-pass/Forgot_Password.jsx";

function App() {

  return(
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/forgot-password" element={<Forgot_Password />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App
