import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "shared/api/auth/AuthService";
import { SignInResponseDto, SignInRequestDto } from "shared/api/auth/dto/signInDto";
import { CheckAuthResponseDto } from "shared/api/auth/dto/checkAuthDto";
import { logoutDto } from "shared/api/auth/dto/logoutDto";
import { SignUpRequestDto, SignUpResponseDto } from "../../../../shared/api/auth/dto/signUpDto";

export const checkAuthThunk = createAsyncThunk<CheckAuthResponseDto>("auth/sign-in", async (_, thunkAPI) => {
  try {
    const { data } = await AuthService.checkAuth();

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Unknown Error");
  }
});

export const signInThunk = createAsyncThunk<SignInResponseDto, SignInRequestDto>(
  "auth/sign-in",
  async (reqData, thunkAPI) => {
    try {
      const { data } = await AuthService.signIn(reqData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);

export const signUpThunk = createAsyncThunk<SignUpResponseDto, SignUpRequestDto>(
  "auth/sign-up",
  async (reqData, thunkAPI) => {
    try {
      const { data } = await AuthService.signUp(reqData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);

export const logoutThunk = createAsyncThunk<logoutDto>("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await AuthService.logout();

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Unknown Error");
  }
});
