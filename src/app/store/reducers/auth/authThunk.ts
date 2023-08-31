import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "shared/api/auth/AuthService";
import {
  CreateUserResponseDto,
  SignInRequestDto,
} from "shared/api/auth/dto/signInDto";
import { CheckAuthResponseDto } from "shared/api/auth/dto/checkAuthDto";

export const checkAuthThunk = createAsyncThunk<CheckAuthResponseDto>(
  "auth/sign-in",
  async (_, thunkAPI) => {
    try {
      const { data } = await AuthService.checkAuth();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  },
);

export const signInThunk = createAsyncThunk<
  CreateUserResponseDto,
  SignInRequestDto
>("auth/sign-in", async (reqData, thunkAPI) => {
  try {
    const { data } = await AuthService.signIn(reqData);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});

export const logoutThunk = createAsyncThunk<CreateUserResponseDto>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await AuthService.logout();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  },
);
