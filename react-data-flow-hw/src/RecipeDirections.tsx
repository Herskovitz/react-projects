import type { IRecipe } from "./RecipeTypes";
type Props = { recipe: IRecipe }

function RecipeDirections({ recipe }: Props) {
    return (
        <>     <ol>
            {recipe.directions.map((i, index) =>
                <li key={index}>{i}</li>
            )}
        </ol>

        </>
    )
}

export default RecipeDirections;
