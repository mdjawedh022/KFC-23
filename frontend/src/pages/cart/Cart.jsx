import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footers from "../../components/Footer/Footer";
import "./cart.css";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  alldataDelete,
  deleteCart,
  getCart,
  updateCart,
} from "../../Redux/Cart/action";
import Loading from "../../components/Loading/Loading";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart, isLoading } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
// ----------------reome by id-----------------
  const handleRemoveFromCart = (id) => {
    dispatch(deleteCart(id));
  };
// -----------------------increase quantity-------
  const handleIncreaseQuantity = (id) => {
    const updatedItem = cart.find((item) => item._id === id);
    if (updatedItem) {
      const updatedQuantity = updatedItem.quantity + 1;
      dispatch(updateCart(id, updatedQuantity));
    }
  };

  const handleDecreaseQuantity = (id) => {
    const updatedItem = cart.find((item) => item._id === id);
    if (updatedItem && updatedItem.quantity > 1) {
      const updatedQuantity = updatedItem.quantity - 1;
      dispatch(updateCart(id, updatedQuantity));
    }
  };

  const handleHome = () => {
    navigate("/menu");
  };
  const deleteaAll = () => {
    dispatch(alldataDelete());
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="cart-wrapper">
            <div className="lines4">
              <div className="line41"></div>
              <div className="line41"></div>
              <div className="line41"></div>
            </div>
            {/* ------------------heading----------------- */}
            <div className="cart-title">
              <h3>MY CART</h3>
            </div>
            {/* ---------------------------------cart------------------------ */}
            <div className="cart-inner">
              {/* --------------------empty cart section-------------------------- */}
              {cart.length === 0 ? (
                <div className="cart-empty-wrapper">
                  <div className="empty-cart">
                    <div className="cart-text-empty">
                      <h1>YOUR CART IS EMPTY. LET'S START AN ORDER!</h1>
                      <button onClick={handleHome}>Start Order</button>
                    </div>
                    <div className="cart-img-empty">
                      <img
                        src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png"
                        alt="empty"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="cart-items-wrapper">
                  <div className="cart-items-first">
                    {/* ------------------------cart-data----------------------- */}
                    {cart.map((elem) => {
                      return (
                        <div className="cart-items-data" key={elem._id}>
                          {/* ------------------------------------ */}
                          <div className="cart-data-first">
                            <div className="cart-data-img">
                              <img
                                className="data-img"
                                src={elem.images}
                                alt={elem.title}
                              />
                            </div>
                            <div className="cart-data-title">
                              <p>{elem.title}</p>
                              <button
                                onClick={() => handleRemoveFromCart(elem._id)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                          <div className="hr-line"></div>
                          {/* ---------------------------------------- */}
                          <div className="cart-data-second">
                            <div className="cart-data-btn">
                              <button>
                                <RiSubtractLine
                                  className="btn-sub"
                                  onClick={() =>
                                    handleDecreaseQuantity(elem._id)
                                  }
                                />
                              </button>
                              <p>{elem.quantity}</p>
                              <button>
                                <IoMdAdd
                                  className="btn-sub"
                                  onClick={() =>
                                    handleIncreaseQuantity(elem._id)
                                  }
                                />
                              </button>
                            </div>
                            <div className="cart-data-pirce">
                              <p> ₹{elem.price * elem.quantity}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="cart-add-items">
                      <Link onClick={deleteaAll}>Remove All</Link>{" "}
                      <button onClick={handleHome}>Add More Menu</button>
                    </div>
                  </div>
                  <div className="cart-items-second">
                    <h3>
                      {cart.reduce((acc, item) => acc + item.quantity, 0)}
                      ITEM
                    </h3>
                    <p>
                      Subtotal{" "}
                      <span>
                        ₹
                        {cart
                          .reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </span>
                    </p>
                    <p>
                      GST <span>10.96</span>
                    </p>
                    <button onClick={() => navigate("/checkout")}>
                      Checkout
                    </button>
                  </div>
                </div>
              )}
              {/* ------------------------------------------- */}
            </div>
          </div>
          <Footers />
        </>
      )}
    </>
  );
};

export default Cart;
