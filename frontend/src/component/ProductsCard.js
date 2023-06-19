import React from "react";

const ProductsCard = ({name, image, category, price, description,loading}) => {
  return (
    <div className="productsCard">
      {
        name ? ( <><div className="sigleCard">
        <img src={image} className="merchandiseImage"/>
      </div>
      <h2 className="cardTitle">{name}</h2>
      <p className="cardPrice">{price}</p>
      <p className="cardDescription">{description}</p>
      

        </>
        )
        : <p className="loadingData">{loading}</p>
      }
    </div>
  );
};

export default ProductsCard;
