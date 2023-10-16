import { useAppDispatch, useAppSelector } from "app/store";
import { SignUpRequestDto } from "shared/api/auth/dto/signUpDto";
import { checkUserThunk } from "app/store/reducers/user/userThunk";
import { authSlice } from "app/store/reducers/auth/authSlice";
import { CheckBotRequestDto } from "shared/api/bot/dto/CheckBotDto";
import { checkBotThunk, getBotThunk } from "app/store/reducers/bot/botThunk";
import { signUpThunk } from "app/store/reducers/auth/authThunk";
import { useState } from "react";

export const useRegistrationRdx = () => {
  const dispatch = useAppDispatch();
  const { setActiveStep } = authSlice.actions;

  const { registration } = useAppSelector((state) => state.authReducer);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitBotInfo = async (data: CheckBotRequestDto) => {
    if (!registration.candidate) return;
    setIsLoading(true);
    const { botName } = await dispatch(checkBotThunk(data)).unwrap();
    await dispatch(signUpThunk({ token: data.token, ...registration.candidate }));

    await dispatch(getBotThunk({ botName }));

    setIsLoading(false);
    dispatch(setActiveStep({ activeStep: 2 }));
  };

  const handleSubmitRegistration = async (data: Omit<SignUpRequestDto, "token">) => {
    await dispatch(checkUserThunk(data)).unwrap();

    dispatch(setActiveStep({ activeStep: 1, candidate: { nikName: data.nikName, password: data.password } }));
  };

  const resetRegistrationState = () => {
    dispatch(setActiveStep({ activeStep: 0, candidate: undefined }));
  };

  return { handleSubmitRegistration, handleSubmitBotInfo, isLoading, registration, resetRegistrationState };
};
