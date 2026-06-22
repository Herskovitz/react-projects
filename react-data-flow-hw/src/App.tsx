import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import initialRecipes from "./RecipeData.json";
import RecipeList from './RecipeList';
import RecipeFeature from "./RecipeFeature";
import { useState } from 'react';
function App() {

  const [recipes, setRecipes] = useState(initialRecipes);
  const [recipeNum, setRecipeNum] = useState(0);
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);

  const handleFavoriteRecipes = () => {
    const newrecipes = recipes.map(r => ({ ...r }));
    let newRecipeNum = recipeNum + 1
    let newFavoriteRecipes = [...favoriteRecipes];
    newFavoriteRecipes.push(newrecipes[recipeNum].recipeName);
    setFavoriteRecipes(newFavoriteRecipes);
    setRecipes(newrecipes);
    setRecipeNum(newRecipeNum);
  }

  return (
    <>
      <div className="container">
        <h1 className="display-3">Hearty Hearth Website</h1>
        <hr />
        <br />
        <div className="row mb-4">
          <h2 className="col-6">Recipe List:</h2>
          <h2 className="col-6">Favorites:</h2>
        </div>
        <div className="row">
          <div className="col-6 recipe-section">
            <RecipeList recipes={recipes} />
          </div>
          <div id="favoriteRecipes" className="col-6 border recipe-section">
            <button disabled={favoriteRecipes.length === recipes.length} onClick={handleFavoriteRecipes} className="btn btn-secondary m-2">
              {favoriteRecipes.length === recipes.length ? "All Recipes are in Favorites" : "Add Recipe"}
            </button>
            {favoriteRecipes.map((recipeName, index) => (
              <p key={index}>{recipeName}</p>
            ))}
          </div>
        </div>
        <div className="row mb-5">
          <h2 className="col-12 mt-4 mb-3">Featured Recipes:</h2>
          <div className="col-6">
            <RecipeFeature recipe={recipes[0]} />
          </div>
          <div className="col-6">
            <RecipeFeature recipe={recipes[2]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
