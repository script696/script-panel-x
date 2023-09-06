import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from "shared/api/users/UsersService";
import { GetUsersRequestDto, GetUsersResponseDto } from "shared/api/users/dto/GetUsersDto";
import { EditUserRequestDto, EditUserResponseDto } from "shared/api/users/dto/EditUserDto";
import { RemoveUserRequestDto, RemoveUserResponseDto } from "shared/api/users/dto/RemoveUserDto";
import { CreateUserRequestDto, CreateUserResponseDto } from "shared/api/users/dto/CreateUserDto";
import { ViewModelToApiMapper } from "./mappers/ViewModelToApiMapper";

export const createUserThunk = createAsyncThunk<CreateUserResponseDto, CreateUserRequestDto>(
  "users/create",
  async (reqParams, thunkAPI) => {
    try {
      const { data } = await UsersService.createUser(reqParams);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  },
);

export const getUsersThunk = createAsyncThunk<GetUsersResponseDto, GetUsersRequestDto>(
  "users/get",
  async (reqParams, thunkAPI) => {
    try {
      const { data } = await UsersService.getAllUsers(reqParams);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  },
);

export const editUsersThunk = createAsyncThunk<EditUserResponseDto, EditUserRequestDto>(
  "users/edit",
  async (reqData, thunkAPI) => {
    try {
      const mappedData = ViewModelToApiMapper.editUsers(reqData);

      const { data } = await UsersService.editUsers(mappedData);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  },
);

export const removeUsersThunk = createAsyncThunk<RemoveUserResponseDto, RemoveUserRequestDto>(
  "users/remove",
  async (reqData, thunkAPI) => {
    try {
      const { data } = await UsersService.removeUsers(reqData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  },
);
