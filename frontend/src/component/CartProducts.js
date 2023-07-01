import React from "react";
import { TbMinus, TbPlus } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteCartItems,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";

const CartProducts = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartAndSummary">
      <div className="cartProducts">
        <div className="cartInfoDiv">
          <div className="cartProductsImg">
            {" "}
            <img src={image} className="cartImage" />
          </div>

          <div className="cartInfoCointeiner">
            <div className="divTitle">
              <h2 className="cartInfoTitle">{name}</h2>
              <p
                className="deleteIcon"
                onClick={() => dispatch(deleteCartItems(id))}
              >
                <AiFillDelete />
              </p>
            </div>
            <p className="cartCategory">{category}</p>
            <p className="cartPrice">
              <span className="dollarSign">$</span>
              {price}
            </p>
            <div className="cartBtns">
              <button
                onClick={() => dispatch(decreaseQty(id))}
                className="cartRemBtn"
              >
                <TbMinus />
              </button>
              <p className="quantity">{qty}</p>
              <button
                onClick={() => dispatch(increaseQty(id))}
                className="cartAddBtn"
              >
                <TbPlus />
              </button>
            </div>
            <h4 className="totalTitle">Total:</h4>
            <div className="total">
              <span className="dollarSign">$</span>
              {total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
