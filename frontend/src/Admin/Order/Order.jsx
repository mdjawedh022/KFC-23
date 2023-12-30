import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./order.css";
import { useDispatch, useSelector } from "react-redux";
import { orderData, orderDelete } from "../../Redux/order/action";

const Order = () => {
  const { order } = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();
  console.log(order);

  useEffect(() => {
    dispatch(orderData());
  }, [dispatch]);

  // -----------deleted---------
  const orderDeletedHandle = (id) => {
    dispatch(orderDelete(id));
  };

  return (
    <div className="grid-container">
      <Navbar />
      <main className="main-container">
        <h2 className="order-heading">Order</h2>
        {order.length === 0 ? (
          <h1>Order cart empty!</h1>
        ) : (
          <div className="order-card">
            {order.map((elem) => (
              <div key={elem._id} className="order-item">
                <img src={elem.cart[0].images} alt={elem.cart[0].title} />
                <div className="order-details">
                  <h3>{elem.cart[0].title}</h3>
                  <h4>₹{elem.cart[0].price}</h4>
                </div>
                <div className="customer-details">
                  <p>Customer {elem.name}</p>
                  <p>Phone no: {elem.phone}</p>
                  <p>
                    Address: {elem.address} <span>{elem.pincode}</span>
                  </p>
                  <div className="order-card-btn">
                    <button>Dispatch</button>
                    <button onClick={() => orderDeletedHandle(elem._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Order;
