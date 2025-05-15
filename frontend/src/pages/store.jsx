// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartSlice";
import wishlistReducer from "../component/wishlistSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

import { combineReducers } from "redux";

// combine all reducers
const rootReducer = combineReducers({
  mycart: cartReducer,
  wishlist: wishlistReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const persistor = persistStore(store);
