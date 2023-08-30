import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/products/productsSlice";
import usersReducer from "../reducers/users/usersSlice";
import userReducer from "../reducers/user/userSlice";
import authReducer from "../reducers/auth/authSlice";

const rootReducer = combineReducers({
  productReducer,
  usersReducer,
  userReducer,
  authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
