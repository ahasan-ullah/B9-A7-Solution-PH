import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Recipes=({addRecipeToQueue})=>{
  const [recipes,setRecipes]=useState([]);

  useEffect(()=>{
    fetch('recipes.json')
    .then(res=>res.json())
    .then(data=>setRecipes(data));
  },[]);

  return(
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {
        recipes.map(recipe=>
          <div key={recipe.recipeId} className="card bg-base-100 w-96 border-2">
            <figure className="px-8 pt-6">
              <img className="w-full md:h-52 object-cover rounded-xl"
                src={recipe.recipeImage}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl text-gray-800 font-semibold">{recipe.recipeName}</h2>
              <p className="text-gray-600 text-base">{recipe.shortDescription}</p>
              <h3 className="text-lg text-gray-800 font-medium">Ingredients: {recipe.ingredients.length}</h3>
              <ul className="ml-8">
                {
                  recipe.ingredients.map((item,idx)=><li key={idx} className="list-disc text-gray-600">{item}</li>)
                }
              </ul>
              <div className="flex gap-10">
                <div className="flex items-center space-x-4">
                  <i className="fa-regular fa-clock text-2xl"></i>
                  <p>{recipe.preparingTime} min</p>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                  <p>{recipe.calories} calories</p>
                </div>
              </div>
              <div className="card-actions">
                <button onClick={()=>addRecipeToQueue(recipe)} className="btn bg-green-400 rounded-full px-8 text-lg text-gray-800 mt-6 font-medium">Want to Cook</button>
              </div>
            </div>
          </div>
        )
      }
      </div>
    </div>
  );
};

Recipes.propTypes={
  addRecipeToQueue: PropTypes.func.isRequired,
}

export default Recipes;