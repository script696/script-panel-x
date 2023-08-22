import { ReactNode, useEffect, useLayoutEffect } from "react";
import { useAppDispatch } from "../StoreProvider";
import { refreshTokensThunk } from "../StoreProvider/reducers/user/userThunk";

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(refreshTokensThunk());
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
