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
  return (
    <Modal>
      <div class="container">
        <h1>Shipping</h1>
        <p>Please enter your shipping details.</p>
        <hr />
        <div class="form">
          <div class="fields fields--2">
            <label class="field">
              <span class="field__label" for="firstname">
                First name
              </span>
              <input class="field__input" type="text" id="firstname" />
            </label>
            <label class="field">
              <span class="field__label" for="lastname">
                Last name
              </span>
              <input class="field__input" type="text" id="lastname" />
            </label>
          </div>
          <label class="field">
            <span class="field__label" for="address">
              Address
            </span>
            <input class="field__input" type="text" id="address" />
          </label>
          <label class="field">
            <span class="field__label" for="country">
              Country
            </span>
            <input class="field__input" id="country" type="text" />
          </label>
          <div class="fields fields--3">
            <label class="field">
              <span class="field__label" for="zipcode">
                Zip code
              </span>
              <input class="field__input" type="number" id="zipcode" />
            </label>
            <label class="field">
              <span class="field__label" for="city">
                City
              </span>
              <input class="field__input" type="text" id="city" />
            </label>
            <label class="field">
              <span class="field__label" for="state">
                State
              </span>
              <select class="field__input" id="state">
                {indianStates.map((state) => {
                  return <option value={state.value}>{state.name}</option>;
                })}
              </select>
            </label>
          </div>
        </div>
        <button class="button" onClick={props.toCloseOrderFrom}>
          Continue
        </button>
      </div>
    </Modal>
  );
}
export default OrderForm;
