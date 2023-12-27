import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/CAT01.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userAdminSignup } from "../../Redux/AdminUser/action";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate=useNavigate();
  // const location=useLocation();
  const dispatch=useDispatch()
  const [passwordType, setPasswordType] = useState("password");
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Name Required"),
        email: Yup.string()
          .email("please provide a valid email address")
          .required("E-mail Required"),
        password: Yup.string()
          .min(4, "Incorrect password")
          .required("password Required"),
      }),
      onSubmit: (values) => {
        let  userData=values;
        dispatch(userAdminSignup(userData)).then(() => navigate("/signin"));
      }
    })
// ------------------------------------------
  const handlePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  // -----------------------------------------
  const handleNavigate=()=>{
    navigate("/")
  }
  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <form className="form" onSubmit={handleSubmit}>
          <div className="auth-heading">
            <Link to="/signin">Sign In</Link> /{" "}
            <Link to="/register">Sign Up</Link>
          </div>
          <h2>Admin</h2>
          <img onClick={handleNavigate} src={img} alt="" />

          <p className="head-p-tag">
            LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!
          </p>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              values={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="error">
              {touched.name && errors.name ? errors.name : null}
            </p>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              values={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="error">
              {touched.email && errors.email ? errors.email : null}
            </p>
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type={passwordType}
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="error">
              {touched.password && errors.password ? errors.password : null}
            </p>
          </div>
          <div className="checkbox-dis">
            <input className="" type="checkbox" onClick={handlePassword} />
            <label className="">Show Password</label>
          </div>
          <p className="privacy">
            By “logging in to KFC”, you agree to our{" "}
            <Link> Privacy Policy</Link> and <Link>Terms & Conditions</Link>.
          </p>
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
