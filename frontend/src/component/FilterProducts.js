import React from "react";
const FilterProducts = ({category,onClick}) => {
  return (
    <div onClick={onClick}>
      <div className="leftLinks">
        <p> {category} </p>
      </div>
    </div>
  );
};

export default FilterProducts;
