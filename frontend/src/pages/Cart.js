import React from "react";
import { useSelector } from "react-redux";
import CartProducts from "../component/CartProducts";
import emptyCartImage from "../images/cart.jpg"

const Cart = () => {
  const productCartItems = useSelector((state) => state.product.cartItems);
  console.log(productCartItems);
  const totalPrice = productCartItems.reduce(
    (acumu, actu) => acumu + parseInt(actu.total),
    0
  );
  const totalQty = productCartItems.reduce(
    (acumu, actu) => acumu + parseInt(actu.qty),
    0
  );
  return (
    <>
      <h2 className="cartTitle">Your Cart</h2>
      
      {productCartItems[0] ?
      <div className="cartMain">
        <div className="">
          {/*display cart items */}
          <div>
            {productCartItems.map((el) => {
              return (
                <CartProducts
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                />
              );
            })}
          </div>

          {/*display total cart items */}
        </div>
        <div className="summary">
          <div className="summaryTitle">
            <h2>summary</h2>
          </div>
          <div className="totalInfo">
            <p className="totalInfoTitle"> Total item quantity</p>
            <p className="totalInfoIP">
              <span className="dollarSign">Uni.</span>
              {totalQty}
            </p>
            <p className="totalInfoTitle">Total Price</p>
            <p className="totalInfoIP">
              <span className="dollarSign">$</span>
              {totalPrice}
            </p>
          </div>
          <div className="paymentDiv">
            <button className="paymentBtn">Payment</button>
          </div>
        </div>
      
      </div>
      : <>
        <div className="noproductCartDiv">
        <div className="emptyTitle"><p>Your Cart is Empty ☹️ </p></div>
          <div>
            <img className="noProductCartImg" src={emptyCartImage}/>
          </div>
        </div>
      </>
    }
    </>
  );
};

export default Cart;
