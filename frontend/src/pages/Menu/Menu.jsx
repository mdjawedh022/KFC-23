/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/products/action";
import { IoIosSearch } from "react-icons/io";
import "./menu.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Navbar from "../../components/Navbar/Navbar";
import Footers from "../../components/Footer/Footer";
import Scroll from "../../components/Scroll/Scroll";
import ResponsiveScroll from "../../components/Scroll/ResponsiveScroll";
import Loading from "../../components/Loading/Loading";
const Menu = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const { products, isLoading } = useSelector((store) => store.productReducer);
  // console.log(products);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="main">
            <div className="menu-wrapper">
              <div className="menu-link-wrapper">
                <div className="lines3">
                  <div className="line3"></div>
                  <div className="line3"></div>
                  <div className="line3"></div>
                </div>
                <h1>KFC MENU</h1>
                <Scroll />
              </div>
              {/* ------responsive----------------- */}
              <ResponsiveScroll />
              <div className="menu-list-items">
                <div className="menu-search">
                  <IoIosSearch className="icon-search" />{" "}
                  <input
                    type="text"
                    placeholder="Search our menu"
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                  />
                </div>
                <div className="menu-line"></div>

                <div className="menu-data-show">
                  <div className="first-data" name="PERI PERI MATCH SPECIALS">
                    <h1 className="heading-menu">PERI PERI MATCH SPECIALS</h1>
                    <div className="fisrt-data-show">
                      {filteredProducts.length === 0 ? (
                        <p>No items found</p>
                      ) : (
                        filteredProducts.map((el) => {
                          if (el.cate === "peri peri match specials") {
                            return (
                              <ProductCard key={el._id} productData={el} />
                            );
                          }
                        })
                      )}
                    </div>
                    {/* ----------------------------- */}
                    <div className="menu-data" name="CHICKEN ROLLS">
                      <h1 className="heading-menu">CHICKEN ROLLS</h1>
                      <div className="second-data">
                        {filteredProducts.length === 0 ? (
                          <p>No items found</p>
                        ) : (
                          filteredProducts.map((el) => {
                            if (el.cate === "chicken Rolls") {
                              return (
                                <ProductCard key={el._id} productData={el} />
                              );
                            }
                          })
                        )}
                      </div>
                    </div>
                    {/* ----------------------------- */}
                    <div className="menu-data" name="CHICKEN BUCKETS">
                      <h1 className="heading-menu">CHICKEN BUCKETS</h1>
                      <div className="second-data">
                        {filteredProducts.length === 0 ? (
                          <p>No items found</p>
                        ) : (
                          filteredProducts.map((el) => {
                            if (el.cate === "chicken buckets") {
                              return (
                                <ProductCard key={el._id} productData={el} />
                              );
                            }
                          })
                        )}
                      </div>
                    </div>
                    {/* ----------------------------- */}
                    <div className="menu-data" name="BIRYANI BUCKETS">
                      <h1 className="heading-menu">BIRYANI BUCKETS</h1>
                      <div className="second-data">
                        {filteredProducts.length === 0 ? (
                          <p>No items found</p>
                        ) : (
                          filteredProducts.map((el) => {
                            if (el.cate === "biryani buckets") {
                              return (
                                <ProductCard key={el._id} productData={el} />
                              );
                            }
                          })
                        )}
                      </div>
                    </div>

                    {/* ----------------------------- */}
                    <div className="menu-data" name="BOX MEALS">
                      <h1 className="heading-menu">BOX MEALS</h1>
                      <div className="second-data">
                        {filteredProducts.length === 0 ? (
                          <p>No items found</p>
                        ) : (
                          filteredProducts.map((el) => {
                            if (el.cate === "box meals") {
                              return (
                                <ProductCard key={el._id} productData={el} />
                              );
                            }
                          })
                        )}
                      </div>
                    </div>

                    {/* ----------------------------- */}
                    <div className="menu-data" name="BURGERS">
                      <h1 className="heading-menu">BURGERS</h1>
                      <div className="second-data">
                        {filteredProducts.length === 0 ? (
                          <p>No items found</p>
                        ) : (
                          filteredProducts.map((el) => {
                            if (el.cate === "burgers") {
                              return (
                                <ProductCard key={el._id} productData={el} />
                              );
                            }
                          })
                        )}
                      </div>
                    </div>

                    {/* ----------------------------- */}
                    <div className="menu-data" name="SNACKS">
                      <h1 className="heading-menu">SNACKS</h1>
                      <div className="second-data">
                        {filteredProducts.length === 0 ? (
                          <p>No items found</p>
                        ) : (
                          filteredProducts.map((el) => {
                            if (el.cate === "snacks") {
                              return (
                                <ProductCard key={el._id} productData={el} />
                              );
                            }
                          })
                        )}
                      </div>
                    </div>

                    {/* ----------------------------- */}
                    <div className="menu-data" name="BEVERAGES">
                      <h1 className="heading-menu">BEVERAGES</h1>
                      <div className="second-data">
                        {filteredProducts.length === 0 ? (
                          <p>No items found</p>
                        ) : (
                          filteredProducts.map((el) => {
                            if (el.cate === "beverages") {
                              return (
                                <ProductCard key={el._id} productData={el} />
                              );
                            }
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footers />
        </>
      )}
    </>
  );
};

export default Menu;
