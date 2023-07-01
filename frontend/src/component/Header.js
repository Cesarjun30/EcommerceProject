import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  //console.log(userData);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Hope to see you later, baaayy!!!");
  };

  //console.log(process.env.REACT_APP_ADMIN_EMAIL)

  const cartItemQty = useSelector(state => state.product.cartItems).length
  return (
    <div className="sticky">
      {/* Desktop*/}

      <div className="top" id="top">
        <nav className="menu">
          <Link className="links" to={""}>
            Home
          </Link>
          {/*<Link className="links" to={"sneakers"}>
            Sneakers
          </Link>
          <Link className="links" to={"dress"}>
            Dress
          </Link>
          <Link className="links" to={"kids"}>
            For Kids
          </Link>
          <Link className="links" to={"men"}>
            For Men
          </Link>*/}
          <Link className="links" to={"offers/648d0eb46676e265a8bde678"}>
            Offers
          </Link>
        </nav>

        <div className="navIcons">
          <Link to={"cart"}>
            <div className="cartIcon">
              <BsCartFill />
              <div className="cartCounter">{cartItemQty}          
               </div>
            </div>
          </Link>
          <div className="loginConteiner" onClick={handleShowMenu}>
            <div className="userIcon">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt="userimage"
                  className="loggedinImg"
                />
              ) : (
                <FaUserAlt />
              )}
            </div>
            {showMenu && (
              <div className="loginMenu">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link to={"NewProduct"} className="newProductLink">
                    New Product
                  </Link>
                )}

                {userData.image ? (
                  <span className="logOut" onClick={handleLogout}>
                    <p>Logout ({userData.firstname})</p>
                  </span>
                ) : (
                  <Link to={"login"} className="loginLink">
                    Log in
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile*/}
    </div>
  );
};

export default Header;
