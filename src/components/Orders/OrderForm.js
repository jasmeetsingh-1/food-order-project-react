// import React, { useCallback, useEffect, useState } from "react";
import React, { useState } from "react";
import "./orderForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Header from "../Layout/Header";
import Feedback from "../Feedback/Feedback";

const validationSchema = Yup.object({
  firstname: Yup.string().required("*Mandatory"),
  lastname: Yup.string().required("*Mandatory"),
  address: Yup.string().required("*Mandatory"),
  country: Yup.string().required("*Mandatory"),
  number: Yup.number().required("*Mandatory"),
  zipcode: Yup.number().required("*Mandatory"),
  city: Yup.string().required("*Mandatory"),
});
const initialValues = {
  firstname: "",
  lastname: "",
  address: "",
  country: "",
  number: "",
  zipcode: "",
  city: "",
  state: "",
};
const indianStates = [
  { name: "--- Select State ---", value: "yetTOSelect" },
  { name: "Uttar Pradesh", value: "uttarPradesh" },
  { name: "Maharashtra", value: "maharashtra" },
  { name: "Bihar", value: "bihar" },
  { name: "West Bengal", value: "westBengal" },
  { name: "Madhya Pradesh", value: "madhyaPradesh" },
  { name: "Tamil Nadu", value: "tamilNadu" },
  { name: "Rajasthan", value: "rajasthan" },
  { name: "Karnataka", value: "karnataka" },
  { name: "Gujarat", value: "gujarat" },
  { name: "Andhra Pradesh", value: "andhraPradesh" },
  { name: "Odisha", value: "odisha" },
  { name: "Telangana", value: "telangana" },
  { name: "Kerala", value: "kerala" },
  { name: "Jharkhand", value: "jharkhand" },
  { name: "Assam", value: "assam" },
  { name: "Punjab", value: "punjab" },
  { name: "Chhattisgarh", value: "chhattisgarh" },
  { name: "Haryana", value: "haryana" },
  { name: "Uttarakhand", value: "uttarakhand" },
  { name: "Himachal Pradesh", value: "himachalPradesh" },
  { name: "Tripura", value: "tripura" },
  { name: "Meghalaya", value: "meghalaya" },
  { name: "Manipur", value: "manipur" },
  { name: "Nagaland", value: "nagaland" },
  { name: "Goa", value: "goa" },
  { name: "Arunachal Pradesh", value: "arunachalPradesh" },
  { name: "Mizoram", value: "mizoram" },
  { name: "Sikkim", value: "sikkim" },
  { name: "Delhi", value: "delhi" },
  { name: "Jammu and Kashmir", value: "jammuAndKashmir" },
  { name: "Puducherry", value: "puducherry" },
  { name: "Chandigarh", value: "chandigarh" },
  { name: "Dadra and Nagar Haveli", value: "dadraAndNagarHaveli" },
  { name: "Daman and Diu", value: "damanAndDiu" },
  { name: "Andaman and Nicobar Islands", value: "andamanAndNicobarIslands" },
  { name: "Lakshadweep", value: "lakshadweep" },
];
function OrderForm(props) {
  const [showFeedbackModal, setShowingFeedbackModal] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formdata = {
        firstname: values.firstname,
        lastname: values.lastname,
        address: values.address,
        country: values.country,
        number: values.number,
        zipcode: values.zipcode,
        city: values.city,
        state: values.state,
      };
      console.log(formdata);
      dispatch({ type: "submit", data: formdata });
      setShowingFeedbackModal(true);
      // formik.resetForm();
    },
  });

  return (
    <div>
      {showFeedbackModal && (
        <Feedback
          onSubmit={() => {
            setShowingFeedbackModal(false);
          }}
          toCloseCart={() => {
            setShowingFeedbackModal(false);
          }}
        />
      )}
      <Header toShowCart={props.toShowCart}></Header>
      <div className="container">
        <div className="headingAndBackButton">
          <h1>Address</h1>
          <p>Please enter your address details.</p>
        </div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" htmlFor="firstname">
                First name
              </span>
              <input
                className="field__input"
                type="text"
                id="firstname"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
              />
              {formik.errors.firstname && formik.touched.firstname ? (
                <p>{formik.errors.firstname}</p>
              ) : null}
            </label>
            <label className="field">
              <span className="field__label" htmlFor="lastname">
                Last name
              </span>
              <input
                className="field__input"
                type="text"
                id="lastname"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
              />
              {formik.errors.lastname && formik.touched.lastname ? (
                <p>{formik.errors.lastname}</p>
              ) : null}
            </label>
          </div>
          <label className="field">
            <span className="field__label" htmlFor="address">
              Address
            </span>
            <input
              className="field__input"
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            {formik.errors.address && formik.touched.address ? (
              <p>{formik.errors.address}</p>
            ) : null}
          </label>
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" htmlFor="country">
                Country
              </span>
              <input
                className="field__input"
                type="text"
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
              />
              {formik.errors.country && formik.touched.country ? (
                <p>{formik.errors.country}</p>
              ) : null}
            </label>
            <label className="field">
              <span className="field__label" htmlFor="number">
                Contact no.:
              </span>
              <input
                className="field__input"
                type="number"
                id="number"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
              />
              {formik.errors.number && formik.touched.number ? (
                <p>{formik.errors.number}</p>
              ) : null}
            </label>
          </div>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" htmlFor="zipcode">
                Zip code
              </span>
              <input
                className="field__input"
                type="number"
                id="zipcode"
                name="zipcode"
                value={formik.values.zipcode}
                onChange={formik.handleChange}
              />
              {formik.errors.zipcode && formik.touched.zipcode ? (
                <p>{formik.errors.zipcode}</p>
              ) : null}
            </label>
            <label className="field">
              <span className="field__label" htmlFor="city">
                City
              </span>
              <input
                className="field__input"
                type="text"
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
              {formik.errors.city && formik.touched.city ? (
                <p>{formik.errors.city}</p>
              ) : null}
            </label>
            <label className="field">
              <span className="field__label" htmlFor="state">
                State
              </span>
              <select
                className="field__input"
                id="state"
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
              >
                {indianStates.map((state) => {
                  return (
                    <option value={state.value} key={state.value}>
                      {state.name}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="outer-div-button-continue">
            <button type="submit" className="continueButton">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default OrderForm;
