import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import product1 from "../images/Prod6.png";
import product2 from "../images/Prod2.png";
import product3 from "../images/Prod3.png";
import product4 from "../images/Prod4.jpg";
import product5 from "../images/Prod5.jpg";
import product6 from "../images/Prod7.jpg";
import product7 from "../images/Prod8.jpg";
import product8 from "../images/Prod9.jpg";
import product9 from "../images/Prod10.jpg";
import product10 from "../images/Prod11.jpg";
import product11 from "../images/Prod12.jpg";
import product12 from "../images/Prod13.jpg";
import ProductsCard from "../component/ProductsCard";
import { useSelector } from "react-redux";
import { AiOutlineWoman } from "react-icons/ai";
import { AiOutlineMan } from "react-icons/ai";
import { CgBoy } from "react-icons/cg";
import { GiLargeDress } from "react-icons/gi";
import { GiSonicShoes } from "react-icons/gi";
import FilterProducts from "../component/FilterProducts";
import Allproducts from "../component/Allproducts";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);


  return (
<>
    <header className="header" id="header">
            <div className="hero" id="hero">
              <h1>
                <span className="titulo-dest">
                  Lorem ipsum dolor, sit amet consectetur
                </span>
                <br />
                adipisicing elit. Facilis.
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Doloribus, nihil.
              </p>
              <button>Full offers</button>

              <div className="socialbts">
                <FaInstagram className="i" />
                <FaFacebook className="i" />
                <FaTiktok className="i" />
                <i className="fa-brands fa-tiktok"></i>
              </div>
            </div>
          </header>

          <Allproducts span={"Our"} heading={"Selection"}/>
    
    
    </>
  );
};

export default Home;
