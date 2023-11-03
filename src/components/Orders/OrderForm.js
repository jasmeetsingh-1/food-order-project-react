// import React, { useCallback, useEffect, useState } from "react";
import React from "react";
import Modal from "../UI/Modal";
import "../Orders/orderForm.css";
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
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [number, setNumber] = useState("");
  // const [address, setAddress] = useState("");
  // const [country, setCountry] = useState("");
  // const [zipCode, setZipCode] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");

  // function inputHandler(id, value) {
  //   if (id === "firstname") {
  //     setFirstName(value);
  //   } else if (id === "lastname") {
  //     setLastName(value);
  //   } else if (id === "number") {
  //     setNumber(value);
  //   } else if (id === "address") {
  //     setAddress(value);
  //   } else if (id === "country") {
  //     setCountry(value);
  //   } else if (id === "zipcode") {
  //     setZipCode(value);
  //   } else if (id === "city") {
  //     setCity(value);
  //   } else if (id === "state") {
  //     setState(value);
  //   }
  // }

  function continueButtonHandler() {
    props.toContinueHandler();
  }
  // useEffect(() => {
  //   console.log("firstname", firstName);
  // }, [firstName]);

  const orderInfoForm = () => {
    return (
      <div className="container">
        <div className="headingAndBackButton">
          <h1>Address</h1>
          <button className="button backButton" onClick={props.toGoBack}>
            back
          </button>
        </div>
        <p>Please enter your address details.</p>
        <hr />
        <div className="form">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" htmlFor="firstname">
                First name
              </span>
              <input className="field__input" type="text" id="firstname" />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="lastname">
                Last name
              </span>
              <input className="field__input" type="text" id="lastname" />
            </label>
          </div>
          <label className="field">
            <span className="field__label" htmlFor="address">
              Address
            </span>
            <input className="field__input" type="text" id="address" />
          </label>
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" htmlFor="country">
                Country
              </span>
              <input className="field__input" type="text" id="country" />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="number">
                Contact no.:
              </span>
              <input className="field__input" type="number" id="number" />
            </label>
          </div>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" htmlFor="zipcode">
                Zip code
              </span>
              <input className="field__input" type="number" id="zipcode" />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="city">
                City
              </span>
              <input className="field__input" type="text" id="city" />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="state">
                State
              </span>
              <select className="field__input" id="state">
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
        </div>
        <button className="continueButton" onClick={continueButtonHandler}>
          Continue
        </button>
      </div>
    );
  };
  // return orderInfoForm();
  return <Modal onClick={props.toCloseOrderFrom}>{orderInfoForm()}</Modal>;
}
export default OrderForm;
