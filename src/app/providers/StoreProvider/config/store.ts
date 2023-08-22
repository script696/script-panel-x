import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/products/productsSlice";
import userReducer from "../reducers/user/userSlice";
import usersReducer from "../reducers/users/usersSlice";

const rootReducer = combineReducers({
  productReducer,
  userReducer,
  usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
