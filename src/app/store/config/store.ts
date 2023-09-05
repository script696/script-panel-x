import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/products/productsSlice";
import usersReducer from "../reducers/users/usersSlice";
import userReducer from "../reducers/user/userSlice";
import authReducer from "../reducers/auth/authSlice";
import botReducer from "../reducers/bot/botSlice";

const rootReducer = combineReducers({
  productReducer,
  usersReducer,
  userReducer,
  authReducer,
  botReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
