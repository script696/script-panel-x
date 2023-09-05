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
  /**
   * TODO
   * Сделать нормальную последовательную цепь запросов
   */
  const initApp = async () => {
    const { meta } = await dispatch(checkAuthThunk());
    if (meta.requestStatus !== "fulfilled") return;
    const { payload } = await dispatch(getUserThunk());
    if (
      payload !== null &&
      typeof payload === "object" &&
      "bot" in payload &&
      payload.bot !== undefined &&
      payload.bot !== null &&
      typeof payload.bot === "object" &&
      "name" in payload.bot
    ) {
      await dispatch(getBotThunk({ botName: payload.bot.name as string }));
    }
  };

  useLayoutEffect(() => {
    initApp();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
