import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import imageReducer from "./imageReducer";
import orderReducer from "./orderReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["order"],
};

const rootReducer = combineReducers({
  images: imageReducer,
  order: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
