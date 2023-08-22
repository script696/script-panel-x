import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersThunk = createAsyncThunk<any>(
  "users/get",
  async (reqParams, thunkAPI) => {
    try {
      const { data } = await Promise.resolve({ data: { isAuth: true } });
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
