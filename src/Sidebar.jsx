import PropTypes from "prop-types";
const Sidebar=({recipeQueue})=>{
  return(
    <div className="md:w-1/3">
      Sidebar
    </div>
  );
};

Sidebar.propTypes={
  recipeQueue: PropTypes.array.isRequired
}
export default Sidebar;