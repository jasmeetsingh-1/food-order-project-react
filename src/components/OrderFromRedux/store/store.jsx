import { createStore } from "redux";
import formReducer from "../reducer/formReducer";

const store = createStore(formReducer);

export default store;
