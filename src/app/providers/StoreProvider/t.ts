import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./config/store";

type ThunkApiConfig = {
  state: number;
};

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>();
