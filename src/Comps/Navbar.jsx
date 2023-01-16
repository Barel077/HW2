import { Link, Route, Routes } from "react-router-dom";
import CreateIngredient from "../Pages/CreateIngredient";
import CreateRecipe from "../Pages/CreateRecipe";
import Home from "../Pages/Home";


export default function Navbar() {

    return (
        <div>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/AddRecipe" element={<CreateRecipe/>}/>
                <Route path="/AddIngredient" element={<CreateIngredient/>}/>
            </Routes>
            <div style={{"background": "cyan", "textAlign":"center", "fontSize": "30px","position":"fixed", "top":"0", "width":"100%"}}>
            <Link to="/Home">Home</Link> |
            <Link to="/AddRecipe">Add Recipe</Link> |
            <Link to="/AddIngredient">Add Ingredient</Link>
            </div>
        </div>
    );
}