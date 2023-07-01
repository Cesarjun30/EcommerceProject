import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Allproducts from "../component/Allproducts";
import { addCartItems } from "../redux/productSlice";

const Offers = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.filter((el) => el._id === filterby)[0];

  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    //e.stopPropagation()
    dispatch(addCartItems(productDisplay)
);
  };

  return (

    <> 
    <div className="offers">
      <div className="offersImgDiv">
        {productDisplay && productDisplay.image && (
          <img
            className="offersImg"
            src={productDisplay.image}
            alt="ProductImg"
          />
        )}
        <div className="productInfoDiv">
          {productDisplay && productDisplay.name && (
            <h2 className="offersTitle">{productDisplay.name}</h2>
          )}
          {productDisplay && productDisplay.price && (
            <p className="offersPrice"><span className='dollarSign'>$</span>{productDisplay.price}</p>
          )}
          {productDisplay && productDisplay.description && (
            <p className="offersDescription">{productDisplay.description}</p>
          )}
          <button className="offersAddBtn" onClick={handleAddCartProduct} >Add to Kart</button>
          <button className="offersBuyBtn">Buy</button>
        </div>
      </div>
     
    </div>
    <Allproducts span={"Related"} heading={"Products"} />
    </>
  );
};

export default Offers;
