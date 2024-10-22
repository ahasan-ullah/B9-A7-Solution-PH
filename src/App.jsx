import { useState } from "react";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./Sidebar";

const App=()=>{
  const [recipeQueue,setRecipeQueue]=useState([]);

  const addRecipeToQueue=recipe=>{
    const isExist=recipeQueue.find(prevRecipe=>prevRecipe.recipeId===recipe.recipeId);

    if(!isExist){
      setRecipeQueue([...recipeQueue,recipe]);
    }
    else{
      alert('Recipe already exists in the queue');
    }
  };
  
  return (
    <div className="container mx-auto px-4">
      <OurRecipes/>
      <section className="w-11/12 mx-auto flex flex-col md:flex-row gap-6">
        <Recipes addRecipeToQueue={addRecipeToQueue}/>
        <Sidebar recipeQueue={recipeQueue}/>
      </section>
    </div>
  );
};

export default App;