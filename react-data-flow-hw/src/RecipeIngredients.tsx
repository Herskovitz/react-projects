import type { IRecipe } from "./RecipeTypes";
type Props = { recipe: IRecipe }

function RecipeIngredients({ recipe }: Props) {
    return (
        <>
            <ul>
                {recipe.ingredients.map((i, index) =>
                    <li key={index}>{i}</li>
                )}
            </ul>
        </>
    )
}
export default RecipeIngredients