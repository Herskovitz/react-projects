import type { IRecipe } from "./RecipeTypes";
type Props = { recipes: IRecipe[] }
function RecipeList({ recipes }: Props) {
    return (
        <>
            <table className="table table-bordered recipe-section">
                <thead>
                    <tr>
                        <th scope="col">Recipe Name</th>
                        <th scope="col">Cuisine</th>
                        <th scope="col">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((r, index) =>
                        <tr key={index}>
                            <td>{r.recipeName}</td>
                            <td>{r.cuisine}</td>
                            <td>{r.calories}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </>
    )

}

export default RecipeList;