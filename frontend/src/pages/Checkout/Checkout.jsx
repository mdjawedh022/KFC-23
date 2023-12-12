import React, { useEffect } from "react";
import "./checkout.css";
import CheckNavbar from "../../components/CheckNavbar/CheckNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { alldataDelete, getCart } from "../../Redux/Cart/action";
import { checkOutpost } from "../../Redux/checkout/action";

const Checkout = () => {
  const navigate=useNavigate();
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch=useDispatch();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(15, "Must be 20 characters or less")
          .required("Name Required"),
        phone: Yup.number()
          .min(10, "Must be 10 digit!")
           .required("Phone number Required"),
        address: Yup.string().required("Required proper address"),
        city: Yup.string().required("Required city"),
        pincode: Yup.number()
        .required('Required pincode')
      }),
      onSubmit: async (values) => {
        // console.log(values);
        const dataCheck={...values,cart};
        navigate("/menu");
        dispatch(checkOutpost(dataCheck))
        dispatch(alldataDelete());
          alert("place order");
      },
    });
  
   useEffect(()=>{
    dispatch(getCart())
   },[dispatch])

  return (
    <>
      <CheckNavbar />
      <div className="checkout-main">
        <div className="lines01">
          <div className="line10"></div>
          <div className="line10"></div>
          <div className="line10"></div>
        </div>
        <div className="checkout-main1">
          <h2>Checkout</h2>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="checkout-wrapper">
            <div>
              <div className="form-checkout">
                <input
                  type="text"
                  placeholder="Enter your full name.. "
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error">
                  {touched.name && errors.name ? errors.name : null}
                </p>
                <input
                  type="text"
                  placeholder="Phone number..."
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error">
                  {touched.phone && errors.phone ? errors.phone : null}
                </p>
                <input
                  type="text"
                  placeholder="Address.."
                  name="address"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error">
                  {touched.address && errors.address ? errors.address : null}
                </p>
                <input
                  type="text"
                  placeholder="city.."
                  name="city"
                  id="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error">
                  {touched.city && errors.city ? errors.city : null}
                </p>
                <input
                  type="text"
                  placeholder="Pincode.."
                  name="pincode"
                  id="pincode"
                  value={values.pincode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error">
                  {touched.pincode && errors.pincode ? errors.pincode : null}
                </p>
              </div>

              {/* ............................ */}
              <div className="form-checkout">
                <h3>Payment</h3>
                <div className="cashonDelivery">
                  <input type="checkbox" required value={true} />
                  <p>cash on delivery</p>
                </div>
              </div>
            </div>
            <div className="cart-items-second">
              <h3>
                {" "}
                {cart?.reduce((acc, item) => acc + item.quantity, 0)} ITEM
              </h3>
              <p>
                Subtotal{" "}
                <span>
                  ₹
                  {cart?.reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </p>
              <p>
                GST <span>10.96</span>
              </p>
              <button type="submit">Checkout</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
