import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./cssFiles/loginCss.css";
import Header from "../Layout/Header";

const validationSchema = Yup.object({
  username: Yup.string()
    .trim()
    .matches(/^(\S+$)/g, "* This field cannot contain blankspaces")
    .required("*Mandatory"),
  name: Yup.string().required("*Mandatory"),
  email: Yup.string().email("Enter correct Email").required("*Mandatory"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("*Mandatory"),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
const intialValues = {
  username: "",
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};
function Login() {
  const formik = useFormik({
    initialValues: intialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formdata = {
        username: values.username,
        name: values.name,
        email: values.email,
        password: values.password,
      };
      console.log(formdata);
      formik.resetForm();
    },
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="headingAndBackButton">
          <h1> Welcome to ReactBites </h1>
        </div>
        <div style={{ paddingLeft: "1rem" }}>
          <p>Login for a seamless experience</p>
        </div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" htmlFor="username">
                User Name:
              </span>
              <input
                className="field__input"
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.errors.username && formik.touched.username ? (
                <p>{formik.errors.username}</p>
              ) : null}
            </label>
            <label className="field">
              <span className="field__label" htmlFor="name">
                Name:
              </span>
              <input
                className="field__input"
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name ? (
                <p>{formik.errors.name}</p>
              ) : null}
            </label>
          </div>
          <label className="field">
            <span className="field__label" htmlFor="email">
              Email :
            </span>
            <input
              className="field__input"
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </label>
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" htmlFor="password">
                Password
              </span>
              <input
                className="field__input"
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password ? (
                <p>{formik.errors.password}</p>
              ) : null}
            </label>
            <label className="field">
              <span className="field__label" htmlFor="confirmpassword">
                Confirm Password:
              </span>
              <input
                className="field__input"
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
              />
              {formik.errors.confirmpassword &&
              formik.touched.confirmpassword ? (
                <p>{formik.errors.confirmpassword}</p>
              ) : null}
            </label>
          </div>
          <div className="outer-div-button-continue">
            <button type="submit" className="continueButton">
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
