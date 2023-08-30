import { ReactNode, useEffect, useLayoutEffect } from "react";
import { useAppDispatch } from "../StoreProvider";
import { getUserThunk } from "../StoreProvider/reducers/user/userThunk";
import { authSlice } from "../StoreProvider/reducers/auth/authSlice";
import { $apiClient } from "../../../shared/api/client";
import {
  checkAuthThunk,
  logoutThunk,
} from "../StoreProvider/reducers/auth/authThunk";
type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();

  const initApp = async () => {
    const { meta } = await dispatch(checkAuthThunk());
    if (meta.requestStatus !== "fulfilled") return;
    await dispatch(getUserThunk());
  };

  useLayoutEffect(() => {
    initApp();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
