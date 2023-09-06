import { useAppDispatch, useAppSelector } from "app/store";
import { SignInRequestDto } from "shared/api/auth/dto/signInDto";
import { signInThunk } from "app/store/reducers/auth/authThunk";
import { getUserThunk } from "app/store/reducers/user/userThunk";
import { GetUserDto } from "shared/api/users/dto/GetUserDto";
import { useNavigate } from "react-router-dom";

export const useLoginRdx = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.authReducer);

  const handleSubmitLogin = async (data: SignInRequestDto) => {
    const { meta } = await dispatch(signInThunk(data));
    if (meta.requestStatus !== "fulfilled") return;
    const { payload } = await dispatch(getUserThunk());
    const user = payload as GetUserDto | undefined;

    if (!user) return;

    const redirectUrl =
      user.role === "admin" ? `/${process.env.PUBLIC_URL}/admin` : `/${process.env.PUBLIC_URL}/system-admin`;

    navigate(redirectUrl, { replace: true });
  };

  return { handleSubmitLogin, isLoading };
};
