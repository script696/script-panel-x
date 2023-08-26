import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from "../../../../../shared/api/users/UsersService";
import { GetUserDto } from "../../../../../shared/api/users/dto/GetUserDto";

export const getUsersThunk = createAsyncThunk<GetUserDto>(
  "users/get",
  async (_, thunkAPI) => {
    try {
      const { data } = await UsersService.getUser();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
