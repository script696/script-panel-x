import { createAsyncThunk } from "@reduxjs/toolkit";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { GetBotRequestDto } from "shared/api/bot/dto/GetBotDto";
import { BotService } from "shared/api/bot/BotService";
import { UpdateBotRequestDto } from "shared/api/bot/dto/UpdateBotDto";
import { snackbarSlice } from "app/store/reducers/snackbar/snackbarSlice";
import { CheckBotRequestDto, CheckBotResponseDto } from "shared/api/bot/dto/CheckBotDto";

export const getBotThunk = createAsyncThunk<BotViewModel, GetBotRequestDto>(
  "bot/get-bot",
  async (reqParams, thunkAPI) => {
    try {
      const { data } = await BotService.getBot(reqParams);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);

export const updateBotThunk = createAsyncThunk<BotViewModel, UpdateBotRequestDto>(
  "bot/update",
  async (reqParams, thunkAPI) => {
    try {
      const { data } = await BotService.updateBot(reqParams);

      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "Bot updated", severity: "success" }));

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);

export const checkBotThunk = createAsyncThunk<CheckBotResponseDto, CheckBotRequestDto>(
  "bot/check-bot",
  async (reqData, thunkAPI) => {
    try {
      const { data } = await BotService.checkBot(reqData);
      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "Success", severity: "success" }));

      return data;
    } catch (e) {
      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "Invalid token", severity: "error" }));

      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);
