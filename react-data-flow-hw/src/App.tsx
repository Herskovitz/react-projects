import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import recipedata from "./RecipeData.json";
import RecipeList from './RecipeList';
import RecipeFeature from "./RecipeFeature"


function App() {

  return (
    <>
      <div className="container">
        <h1 className="display-3">Hearty Hearth Website</h1>
        <hr />
        <br />
        <div className="row mb-4">
          <h2 className="col-6">Recipe List:</h2>
          <h2 className="col-6">Featured Recipes:</h2>
        </div>
        <div className="row">
          <div className="col-6">
            <RecipeList recipes={recipedata} />
          </div>
          <div className="col-6">
            <RecipeFeature recipe={recipedata[0]} />
            <hr />
            <RecipeFeature recipe={recipedata[2]} />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
