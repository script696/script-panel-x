import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductService } from "../../../../../shared/api/product/ProductService";
import {
  ProductCreateMainInfo,
  ProductEditMainInfo,
  ProductsViewModel,
  ProductViewModel,
} from "./types/typedef";
import {
  RemoveProductRequestDto,
  RemoveProductResponseDto,
} from "../../../../../shared/api/product/dto/RemoveProductDto";
import { UpdateProductSecondaryInfoRequestDto } from "../../../../../shared/api/product/dto/UpdateProductSecondaryInfoDto";
import { AddProductImageRequestDto } from "../../../../../shared/api/product/dto/AddProductImagesDto";
import { RemoveProductImageRequestDto } from "../../../../../shared/api/product/dto/RemoveProductImagesDto";
import { GetProductsRequestDto } from "../../../../../shared/api/product/dto/GetProductsDto";
import { ViewModelToApiMapper } from "./mappers/ViewModelToApiMapper";

export const getProductsThunk = createAsyncThunk<
  ProductsViewModel,
  GetProductsRequestDto
>("product/get", async (reqParams, thunkAPI) => {
  try {
    const { data } = await ProductService.getProducts(reqParams);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});

export const createProductThunk = createAsyncThunk<
  ProductViewModel,
  ProductCreateMainInfo
>("product/create", async (reqData, thunkAPI) => {
  try {
    const { data } = await ProductService.createProduct(reqData);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});

export const removeProductsThunk = createAsyncThunk<
  RemoveProductResponseDto,
  RemoveProductRequestDto
>("product/remove", async (reqData, thunkAPI) => {
  try {
    const { data } = await ProductService.removeProducts(reqData);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});

export const updateProductMainInfoThunk = createAsyncThunk<
  ProductViewModel,
  ProductEditMainInfo
>("product/update-main-info", async (reqData, thunkAPI) => {
  const mappedReqData = ViewModelToApiMapper.updateProductMainInfo(reqData);

  try {
    const { data } = await ProductService.updateProductMainInfo(mappedReqData);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});

export const updateProductSecondaryInfoThunk = createAsyncThunk<
  ProductViewModel,
  UpdateProductSecondaryInfoRequestDto
>("product/update-secondary-info", async (reqData, thunkAPI) => {
  try {
    const { data } = await ProductService.updateProductSecondaryInfo(reqData);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});

export const addImagesThunk = createAsyncThunk<
  ProductViewModel,
  AddProductImageRequestDto
>("product/add-images", async (reqData, thunkAPI) => {
  try {
    const { data } = await ProductService.addImages(reqData);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});

export const removeImagesThunk = createAsyncThunk<
  ProductViewModel,
  RemoveProductImageRequestDto
>("product/remove-images", async (reqData, thunkAPI) => {
  try {
    const { data } = await ProductService.removeImages(reqData);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});
