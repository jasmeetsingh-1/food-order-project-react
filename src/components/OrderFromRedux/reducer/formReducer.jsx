const initalValues = {
  firstname: "",
  lastname: "",
  address: "",
  country: "",
  number: "",
  zipcode: "",
  city: "",
  state: "",
};

export default function formReducer(state = initalValues, action) {
  if (action.type === "submit") {
    return {
      ...action.data,
    };
  }
  return {
    ...state,
  };
}
