import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/products/productsSlice";

const rootReducer = combineReducers({
  productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
