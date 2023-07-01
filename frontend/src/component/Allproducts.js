import React, { useEffect, useState } from "react";
import FilterProducts from "./FilterProducts";
import ProductsCard from "./ProductsCard";
import { useSelector } from "react-redux";

const Allproducts = ({ span, heading, loading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];

  const productsCartList = productData.slice(4, 8);

  const loadingProducts = new Array(18).fill(null);

  // Filtro de data

  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  return (
    <main className="general" id="general">
      <div className="Lmainconteiner" id="Lmainconteiner">
        <div className="leftside-content">
          <div className="left-title">
            <h3> Filter Categories</h3>
          </div>

          <div className="left-side-menu">
            <p>
              {categoryList[0] ? (
                categoryList.map((el) => {
                  return (
                    <FilterProducts
                      category={el}
                      onClick={() => handleFilterProduct(el)}
                    />
                  );
                })
              ) : (
                <p className="loadingData">Loading Products</p>
              )}
            </p>
          </div>
        </div>
      </div>

      {/*AQUI TERMINA EL LEFT CONTEINER */}

      <div className="Rmainconteiner" id="Rmainconteiner">
        <article className="contenedor" id="contenedor">
          <section className="productos" id="productos">
            <h2 className="productTitle">
              <span>{span}</span> {heading}
            </h2>

            <div className="product-row1">
              <div className="newMerchandise">
                {dataFilter[0] ? dataFilter.map((el) => {
                  return (
                    <ProductsCard
                      key={el._id}
                      id={el._id}
                      image={el.image}
                      name={el.name}
                      price={el.price}
                      category={el.category}
                      description={el.description}
                    />
                  );
                })
                :loadingProducts.map((el, index) => {
                  return (
                    <ProductsCard key={index} loading={"Loading data..."} />
                  );
                })
                
                }
              </div>
            </div>
          </section>
          {/*New MERCHADISE PRODUCT CARD*/}

          <h2 className="productTitle">
            <span>New</span> Merchandise
          </h2>
          <div className="newMerchandise">
            {productsCartList[0]
              ? productsCartList.map((el) => {
                  return (
                    <ProductsCard
                      key={el._id}
                      id={el._id}
                      image={el.image}
                      name={el.name}
                      price={el.price}
                      category={el.category}
                      description={el.description}
                    />
                  );
                })
              : loadingProducts.map((el, index) => {
                  return (
                    <ProductsCard key={index} loading={"Loading data..."} />
                  );
                })}
          </div>
        </article>
      </div>
    </main>
  );
};

export default Allproducts;
