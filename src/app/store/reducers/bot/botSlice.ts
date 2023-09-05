import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BotViewModel } from "./types/typedef";
import { getBotThunk, updateBotThunk } from "app/store/reducers/bot/botThunk";

export type BotState = {
  bot: BotViewModel | null;
  isLoading: boolean;
  error: string;
};

const initialState: BotState = {
  bot: null,
  isLoading: false,
  error: "",
};

export const botSlice = createSlice({
  name: "bot",
  initialState,
  reducers: {},

  extraReducers: {
    /* Get Bot */

    [getBotThunk.fulfilled.type]: (
      state,
      { payload }: PayloadAction<BotViewModel>,
    ) => {
      state.isLoading = false;
      state.error = "";
      state.bot = payload;
    },
    [getBotThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBotThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* update Bot */

    [updateBotThunk.fulfilled.type]: (
      state,
      { payload }: PayloadAction<BotViewModel>,
    ) => {
      state.isLoading = false;
      state.error = "";
      state.bot = payload;
    },
    [updateBotThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [updateBotThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default botSlice.reducer;
