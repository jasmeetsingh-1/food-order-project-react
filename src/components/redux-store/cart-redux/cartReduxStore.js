import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducerFunction from "./cartReduxReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducerFunction);

const cartStore = createStore(
  persistedReducer // pass the persisted reducer instead of rootReducer to createStore
);

const cartPersistor = persistStore(cartStore);

export { cartStore, cartPersistor };
