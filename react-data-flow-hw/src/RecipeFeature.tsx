import RecipeDirections from "./RecipeDirections";
import RecipeIngredients from "./RecipeIngredients";
import type { IRecipe } from "./RecipeTypes";
type Props = { recipe: IRecipe }


function RecipeFeature({ recipe }: Props) {
    return (
        <>
            <article className="container border">
                <h4>{recipe.recipeName}</h4>
                <div className="row border">
                    <div className="col-2 recipe-spec">Cuisine:</div>
                    <div className="col-2 recipe-spec">{recipe.cuisine}</div>
                    <div className="col-4"></div>
                    <div className="col-2 recipe-spec">Calories:</div>
                    <div className="col-2 recipe-spec">{recipe.calories}</div>
                </div>
                <br />
                <div className="row">
                    <div className="col-6 border recipe-spec">Ingredients:</div>
                    <div className="col-6 border recipe-spec">Directions:</div>
                </div>
                <div className="row">
                    <div className="col-6 border recipe-detail">
                        {recipe.ingredients.length > 0 && <RecipeIngredients recipe={recipe} />}
                    </div>
                    <div className="col-6 border recipe-detail" >
                        <RecipeDirections recipe={recipe} />
                    </div>
                </div>
            </article >
        </>
    )
}

export default RecipeFeature;