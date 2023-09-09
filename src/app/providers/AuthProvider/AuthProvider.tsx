import { ReactNode, useLayoutEffect } from "react";
import { getUserThunk } from "app/store/reducers/user/userThunk";
import { checkAuthThunk } from "app/store/reducers/auth/authThunk";
import { useAppDispatch } from "app/store";
import { getBotThunk } from "app/store/reducers/bot/botThunk";
type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useAppDispatch();

  const initApp = async () => {
    const checkAuthRes = await dispatch(checkAuthThunk()).unwrap();
    if (!checkAuthRes) return;
    const getUserRes = await dispatch(getUserThunk()).unwrap();
    if (!getUserRes) return;
    await dispatch(getBotThunk({ botName: getUserRes.bot.name }));
  };

  useLayoutEffect(() => {
    initApp();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
