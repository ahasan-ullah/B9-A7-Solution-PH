import { useState } from "react";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App=()=>{
  const [recipeQueue,setRecipeQueue]=useState([]);
  const [preparedRecipe,setPreparedRecipe]=useState([]);
  const [totalTime,setTotalTime]=useState(0);
  const [totalCalories,SetTotalCalories]=useState(0);

  const handlePrepareButton=id=>{
    const deletedRecipe=recipeQueue.find(recipe=>recipe.recipeId===id);
    
    const updatedQueue=recipeQueue.filter(recipe=>recipe.recipeId!==id);
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe,deletedRecipe]);
  };
  
  const calculateCalories=(time,calories)=>{
    setTotalTime(totalTime+time);
    SetTotalCalories(totalCalories+calories);
  }

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
        <Sidebar recipeQueue={recipeQueue} handlePrepareButton={handlePrepareButton} preparedRecipe={preparedRecipe} calculateCalories={calculateCalories} totalTime={totalTime} totalCalories={totalCalories}/>
      </section>
    </div>
  );
};

export default App;