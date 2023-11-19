/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/products/action";
import { IoIosSearch } from "react-icons/io";
import "./menu.css";
import { Link } from "react-scroll";
import ProductCard from "../../components/ProductCard/ProductCard";
const Menu = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const { products, isLoading, isError } = useSelector(
    (store) => store.productReducer
  );
  console.log(products);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  if (isLoading) {
    return (
      <img
        className="load-img"
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzFxM2cxcmpiemx6dXliazA1Ynh1aGVuOHk5ZTFkMDBhN2RsaTIzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lNRLsk8q0htMHgrHxb/giphy.gif"
        alt=""
      />
    );
  } else if (isError) {
    alert("something wrong!");
  }
  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main">
      <div className="menu-wrapper">
        <div className="menu-link-wrapper">
          <div className="lines3">
            <div className="line3"></div>
            <div className="line3"></div>
            <div className="line3"></div>
          </div>
          <h1>KFC MENU</h1>
          <div className="list-menu-link">
            <Link to="PERI PERI MATCH SPECIALS" smooth={true} duration={2000}>
              <p>PERI PERI MATCH SPECIALS</p>
            </Link>
            <Link to="CHICKEN ROLLS" smooth={true} duration={2000}>
              <p>CHICKEN ROLLS</p>
            </Link>
            <Link to="CHICKEN BUCKETS" smooth={true} duration={2000}>
              <p>CHICKEN BUCKETS</p>
            </Link>
            <Link to="BIRYANI BUCKETS" smooth={true} duration={2000}>
              <p>BIRYANI BUCKETS</p>
            </Link>
            <Link to="BOX MEALS" smooth={true} duration={2000}>
              <p>BOX MEALS</p>
            </Link>
            <Link to="BURGERS" smooth={true} duration={2000}>
              <p>BURGERS</p>
            </Link>
            <Link to="SNACKS" smooth={true} duration={2000}>
              <p>SNACKS</p>
            </Link>
            <Link to="BEVERAGES" smooth={true} duration={2000}>
              <p>BEVERAGES</p>
            </Link>
          </div>
        </div>
        {/* ------responsive----------------- */}
        <div className="responsive-menu">
          <ul>
            <li>
              {" "}
              <Link to="PERI PERI MATCH SPECIALS" smooth={true} duration={2000}>
                PERI PERI MATCH SPECIALS
              </Link>
            </li>
            <li>
              {" "}
              <Link to="CHICKEN ROLLS" smooth={true} duration={2000}>
                CHICKEN ROLLS
              </Link>
            </li>
            <li>
              {" "}
              <Link to="CHICKEN BUCKETS" smooth={true} duration={2000}>
                CHICKEN BUCKETS
              </Link>
            </li>
            <li>
              {" "}
              <Link to="BIRYANI BUCKETS" smooth={true} duration={2000}>
                BIRYANI BUCKETS
              </Link>
            </li>
            <li>
              {" "}
              <Link to="BOX MEALS" smooth={true} duration={2000}>
                BOX MEALS
              </Link>
            </li>
            <li>
              {" "}
              <Link to="BURGERS" smooth={true} duration={2000}>
                BURGERS
              </Link>
            </li>
            <li>
              <Link to="SNACKS" smooth={true} duration={2000}>
                SNACKS
              </Link>
            </li>
            <li>
              <Link to="BEVERAGES" smooth={true} duration={2000}>
                BEVERAGES
              </Link>
            </li>
          </ul>
        </div>
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
                      return <ProductCard key={el._id} productData={el} />;
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
                        return <ProductCard key={el._id} productData={el} />;
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
                        return <ProductCard key={el._id} productData={el} />;
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
                        return <ProductCard key={el._id} productData={el} />;
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
                        return <ProductCard key={el._id} productData={el} />;
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
                        return <ProductCard key={el._id} productData={el} />;
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
                        return <ProductCard key={el._id} productData={el} />;
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
                        return <ProductCard key={el._id} productData={el} />;
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
  );
};

export default Menu;
