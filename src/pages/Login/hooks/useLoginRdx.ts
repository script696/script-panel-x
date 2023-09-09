import { useAppDispatch, useAppSelector } from "app/store";
import { SignInRequestDto } from "shared/api/auth/dto/signInDto";
import { signInThunk } from "app/store/reducers/auth/authThunk";
import { getUserThunk } from "app/store/reducers/user/userThunk";
import { useNavigate } from "react-router-dom";
import { ROUTES_ADMIN, ROUTES_BASE } from "app/routing";
import { ROUTES_SYSTEM_ADMIN } from "app/routing/constants/routes";
import { getBotThunk } from "app/store/reducers/bot/botThunk";

export const useLoginRdx = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.authReducer);

  const handleSubmitLogin = async (data: SignInRequestDto) => {
    const signInRes = await dispatch(signInThunk(data)).unwrap();
    if (!signInRes) return;
    const getUserRes = await dispatch(getUserThunk()).unwrap();
    if (!getUserRes) return;
    await dispatch(getBotThunk({ botName: getUserRes.bot.name }));

    const redirectUrl =
      getUserRes.role === "admin"
        ? `/${ROUTES_BASE.ADMIN}/${ROUTES_ADMIN.BOT}`
        : `/${ROUTES_BASE.SYSTEM_ADMIN}/${ROUTES_SYSTEM_ADMIN.USERS}`;

    navigate(redirectUrl, { replace: true });
  };

  return { handleSubmitLogin, isLoading };
};
