import { createAsyncThunk } from "@reduxjs/toolkit";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { GetBotRequestDto } from "shared/api/bot/dto/GetBotDto";
import { BotService } from "shared/api/bot/BotService";
import { UpdateBotRequestDto } from "shared/api/bot/dto/UpdateBotDto";
import { snackbarSlice } from "app/store/reducers/snackbar/snackbarSlice";

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
