import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./components/home/Home.jsx"
import AddRecipe from "./components/add-recipe/AddRecipe.jsx";

function App() {

  return(
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
          </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App
