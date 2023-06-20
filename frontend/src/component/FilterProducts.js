import React from "react";
import {GiSonicShoes} from 'react-icons/gi'
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
