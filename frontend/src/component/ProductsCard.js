import React from "react";
import { Link } from "react-router-dom";
import { addCartItems } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const ProductsCard = ({
  name,
  image,
  category,
  price,
  description,
  loading,
  id,
}) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    //e.stopPropagation()
    dispatch(
      addCartItems({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
  };
  return (
    <div className="productsCard">
      {name ? (
        <>
          <Link
            to={`/offers/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="sigleCard">
              <img src={image} className="merchandiseImage" />
            </div>
          </Link>
          <h2 className="cardTitle">{name}</h2>
          <p className="cardPrice"><span className='dollarSign'>$</span>{price}</p>
          <p className="cardDescription">{description}</p>
          <button className="addBtn" onClick={handleAddCartProduct}>
            Add to Kart
          </button>
        </>
      ) : (
        <p className="loadingData">{loading}</p>
      )}
    </div>
  );
};

export default ProductsCard;
