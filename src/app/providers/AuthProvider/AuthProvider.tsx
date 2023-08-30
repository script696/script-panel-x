import { ReactNode, useLayoutEffect } from "react";
import { getUserThunk } from "../../store/reducers/user/userThunk";
import { checkAuthThunk } from "../../store/reducers/auth/authThunk";
import { useAppDispatch } from "../../store";
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
