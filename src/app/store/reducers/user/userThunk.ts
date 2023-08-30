import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetUserDto } from "shared/api/users/dto/GetUserDto";
import { UsersService } from "shared/api/users/UsersService";

export const getUserThunk = createAsyncThunk<GetUserDto>(
  "user/get",
  async (_, thunkAPI) => {
    try {
      const { data } = await UsersService.getUser();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
