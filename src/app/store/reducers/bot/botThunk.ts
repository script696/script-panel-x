import { createAsyncThunk } from "@reduxjs/toolkit";
import { BotViewModel } from "app/store/reducers/bot/types/typedef";
import { GetBotRequestDto } from "shared/api/bot/dto/GetBotDto";
import { BotService } from "shared/api/bot/BotService";
import { UpdateBotRequestDto } from "shared/api/bot/dto/UpdateBotDto";

export const getBotThunk = createAsyncThunk<BotViewModel, GetBotRequestDto>(
  "bot/get-bot",
  async (reqParams, thunkAPI) => {
    try {
      const { data } = await BotService.getBot(reqParams);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  },
);

export const updateBotThunk = createAsyncThunk<
  BotViewModel,
  UpdateBotRequestDto
>("bot/update", async (reqParams, thunkAPI) => {
  try {
    const { data } = await BotService.updateBot(reqParams);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});
