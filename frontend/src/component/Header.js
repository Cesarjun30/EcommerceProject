import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";



const Header = () => {

  const [showMenu,setShowMenu] = useState()
  const handleShowMenu = () => {

    setShowMenu (preve => !preve)
  }

  return (
    <div className="sticky">
      {/* Desktop*/}

      <div className="top" id="top">
        <nav className="menu">
          <Link className="links" to={""}>
            Home
          </Link>
          <Link className="links" to={"sneakers"}>
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
          </Link>
          <Link className="links" to={"offers"}>
            Offers
          </Link>
        </nav>

        <div className="navIcons">
          <div className="cartIcon">
            <BsCartFill />
            <div className="cartCounter">0</div>
          </div>
          <div className="loginConteiner" onClick={handleShowMenu}>
            <div className="userIcon" >
              <FaUserAlt />
            </div >
            {showMenu && (<div className="loginMenu">
              <Link to={"NewProduct"} className="newProductLink">New Product</Link>
              <Link to={"login"} className="loginLink">Log in</Link>
            </div>)}

          </div>
        </div>
      </div>

      {/* Mobile*/}
    </div>
  );
};

export default Header;
