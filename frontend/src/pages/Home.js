import React from "react";
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

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const productsCartList = productData.slice(4,8);

  const loadingProducts = new Array(4).fill(null)
   
  return (
    <main className="general" id="general">
      <div className="Lmainconteiner" id="Lmainconteiner">
        <div className="leftside-content">
          <div className="left-title">
            <h3>Categories</h3>
          </div>

          <div className="left-side-menu">
            <Link to={""} className="leftLinks">
              {" "}
              Link 1
            </Link>
            <Link to={""} className="leftLinks">
              {" "}
              Link 1
            </Link>
            <Link to={""} className="leftLinks">
              {" "}
              Link 1
            </Link>
            <Link to={""} className="leftLinks">
              {" "}
              Link 1
            </Link>
            <Link to={""} className="leftLinks">
              {" "}
              Link 1
            </Link>
          </div>
        </div>
      </div>

      {/*AQUI TERMINA EL LEFT CONTEINER */}

      <div className="Rmainconteiner" id="Rmainconteiner">
        <article className="contenedor" id="contenedor">
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

          {/*New MERCHADISE PRODUCT CARD*/}

          <h1 className="productTitle">New Merchandise</h1>
          <div className="newMerchandise">
            
            { productsCartList[0] ? productsCartList.map(el => {
              return (
                
              
              <ProductsCard
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
                description={el.description}
              />
              );

              })
              : loadingProducts.map((el, index)=>{
                return(
                  <ProductsCard
                    key={index}
                    loading={"Loading data..."}
                  />
                )
              })
              }
              
          </div>
              
          <section className="productos" id="productos">
            <h2>New Merchandise</h2>

            <div className="product-row1">
              <div className="row-boxes">
                <img src={product1} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Black Lace Sleeve</h4>
                <div className="price">
                  <span>$15.00</span>
                </div>
              </div>

              <div className="row-boxes">
                <img src={product2} alt="" width="200px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Embroidered Top Blouse</h4>
                <div className="price">
                  <span>$19.00</span>
                </div>
              </div>

              <div className="row-boxes">
                <img src={product3} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Embroidery Details Blouse</h4>
                <div className="price">
                  <span>$23.00</span>
                </div>
              </div>

              <div className="row-boxes">
                <img src={product4} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Boho Top Sleeve</h4>
                <div className="price">
                  <span>$15.00</span>
                </div>
              </div>
            </div>

            <div className="product-row2">
              <div className="row-boxes">
                <img src={product5} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Black Lace Sleeve</h4>
                <div className="price">
                  <span>$15.00</span>
                </div>
              </div>

              <div className="row-boxes">
                <img src={product6} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Embroidered Top Blouse</h4>
                <div className="price">
                  <span>$19.00</span>
                </div>
              </div>

              <div className="row-boxes">
                <img src={product7} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Embroidery Details Blouse</h4>
                <div className="price">
                  <span>$23.00</span>
                </div>
              </div>

              <div className="row-boxes">
                <img src={product8} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Boho Top Sleeve</h4>
                <div className="price">
                  <span>$15.00</span>
                </div>
              </div>
            </div>
            <div className="product-row3">
              <div className="row-boxes">
                <img src={product9} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Black Lace Sleeve</h4>
                <div className="price">
                  <span>$15.00</span>
                </div>
              </div>

              <div className="row-boxes">
                <img src={product10} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Embroidered Top Blouse</h4>
                <div className="price">
                  <span>$19.00</span>
                </div>
              </div>

              <div className="row-boxes">
                <img src={product11} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Embroidery Details Blouse</h4>
                <div className="price">
                  <span>$23.00</span>
                </div>
              </div>

              <div className="row-boxes">
                <img src={product12} alt="" width="250px" height="auto" />
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h4 className="product-name">Boho Top Sleeve</h4>
                <div className="price">
                  <span>$15.00</span>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Home;
