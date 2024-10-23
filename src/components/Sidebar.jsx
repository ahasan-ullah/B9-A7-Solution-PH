import PropTypes from "prop-types";
const Sidebar=({recipeQueue,handlePrepareButton,preparedRecipe,calculateCalories,totalTime,totalCalories})=>{
  return(
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 bg-base-100">
      {/* Want to cook table */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-xl text-gray-800 text-center py-3">Want To Cook: {recipeQueue.length}</h2>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              recipeQueue.map((recipe,idx)=>
                <tr key={idx} className="hover">
                  <th>{++idx}</th>
                  <td>{recipe.recipeName}</td>
                  <td>{recipe.preparingTime}</td>
                  <td>{recipe.calories}</td>
                  <td>
                    <button onClick={()=>
                      {
                      handlePrepareButton(recipe.recipeId);
                      calculateCalories(recipe.preparingTime,recipe.calories);
                      }
                    } className="btn bg-green-400 rounded-full px-2 py-1 md:px-4 md:py-2 my-2 text-sm text-gray-800 font-medium">Preparing</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      {/* Current;y cooking table */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-xl text-gray-800 text-center py-3">Currently Cooking: {preparedRecipe.length}</h2>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {
              preparedRecipe.map((recipe,idx)=>
                <tr key={idx} className="hover">
                  <th>{++idx}</th>
                  <td>{recipe.recipeName}</td>
                  <td>{recipe.preparingTime}</td>
                  <td>{recipe.calories}</td>
                </tr>
              )
            }
            <tr className="border-none">
              <th></th>
              <td></td>
              <td>Total Time = {totalTime} min</td>
              <td>Total Calories = {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes={
  recipeQueue: PropTypes.array.isRequired,
  handlePrepareButton: PropTypes.func.isRequired,
  preparedRecipe: PropTypes.array.isRequired,
  calculateCalories: PropTypes.func.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired
}
export default Sidebar;