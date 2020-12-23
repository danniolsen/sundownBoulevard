import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import imageReducer from "./imageReducer";
import orderReducer from "./orderReducer";
import allOrdersReducer from "./allOrdersReducer.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["allOrders"],
};

const rootReducer = combineReducers({
  images: imageReducer,
  order: orderReducer,
  allOrders: allOrdersReducer,
});

export default persistReducer(persistConfig, rootReducer);
