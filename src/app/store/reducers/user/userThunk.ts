import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetUserDto } from "shared/api/users/dto/GetUserDto";
import { UsersService } from "shared/api/users/UsersService";
import {
  CheckUserExistRequestDto,
  CheckUserExistResponseDto,
} from "../../../../shared/api/users/dto/CheckUserExistDto";
import { snackbarSlice } from "../snackbar/snackbarSlice";

export const getUserThunk = createAsyncThunk<GetUserDto>("user/get", async (_, thunkAPI) => {
  try {
    const { data } = await UsersService.getUser();

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Unknown Error");
  }
});

export const checkUserThunk = createAsyncThunk<CheckUserExistResponseDto, CheckUserExistRequestDto>(
  "user/check-user-exist",
  async (requestData, thunkAPI) => {
    try {
      const { data } = await UsersService.checkUserExist(requestData);
      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "Success", severity: "success" }));

      return data;
    } catch (e) {
      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "User already exist", severity: "error" }));

      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);
