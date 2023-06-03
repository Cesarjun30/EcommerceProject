import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
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
          </div>
          <div className="userIcon">
            <FaUserAlt />
          </div>
        </div>
      </div>
      
      {/* Mobile*/}
    </div>
  );
};

export default Header;
