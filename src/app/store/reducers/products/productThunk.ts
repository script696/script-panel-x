import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductService } from "shared/api/product/ProductService";
import {
  ProductCreateMainInfo,
  ProductEditMainInfo,
  ProductSecondaryInfo,
  ProductsViewModel,
  ProductViewModel,
} from "./types/typedef";
import { RemoveProductRequestDto, RemoveProductResponseDto } from "shared/api/product/dto/RemoveProductDto";
import { AddProductImagesRequestDto } from "shared/api/product/dto/AddProductImagesDto";
import { RemoveProductImageRequestDto } from "shared/api/product/dto/RemoveProductImagesDto";
import { GetProductsRequestDto } from "shared/api/product/dto/GetProductsDto";
import { ViewModelToApiMapper } from "./mappers/ViewModelToApiMapper";
import { snackbarSlice } from "app/store/reducers/snackbar/snackbarSlice";
import { ApiToViewModelMapper } from "app/store/reducers/products/mappers/ApiToViewModelMapper";

export const getProductsThunk = createAsyncThunk<ProductsViewModel, GetProductsRequestDto>(
  "product/get",
  async (reqParams, thunkAPI) => {
    try {
      const { data } = await ProductService.getProducts(reqParams);

      const mappedResData = ApiToViewModelMapper.getProducts(data);

      return mappedResData;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);

export const createProductThunk = createAsyncThunk<ProductViewModel, ProductCreateMainInfo>(
  "product/create",
  async (reqData, thunkAPI) => {
    try {
      const mappedReqData = ViewModelToApiMapper.createProduct(reqData);

      const { data } = await ProductService.createProduct(mappedReqData);

      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "Product created", severity: "success" }));

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);

export const removeProductsThunk = createAsyncThunk<RemoveProductResponseDto, RemoveProductRequestDto>(
  "product/remove",
  async (reqData, thunkAPI) => {
    try {
      const { data } = await ProductService.removeProducts(reqData);

      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "Product removed", severity: "success" }));

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);

export const updateProductMainInfoThunk = createAsyncThunk<ProductViewModel, ProductEditMainInfo>(
  "product/update-main-info",
  async (reqData, thunkAPI) => {
    const mappedReqData = ViewModelToApiMapper.updateProductMainInfo(reqData);

    try {
      const { data } = await ProductService.updateProductMainInfo(mappedReqData);

      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "Product updated", severity: "success" }));

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);

export const updateProductSecondaryInfoThunk = createAsyncThunk<ProductViewModel, ProductSecondaryInfo>(
  "product/update-secondary-info",
  async (reqData, thunkAPI) => {
    try {
      const mappedReqData = ViewModelToApiMapper.updateSecondaryMainInfo(reqData);

      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "Product updated", severity: "success" }));

      const { data } = await ProductService.updateProductSecondaryInfo(mappedReqData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);

export const addImagesThunk = createAsyncThunk<ProductViewModel, AddProductImagesRequestDto>(
  "product/add-images",
  async (reqData, thunkAPI) => {
    try {
      const { data } = await ProductService.addImages(reqData);

      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "Images added", severity: "success" }));

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);

export const removeImagesThunk = createAsyncThunk<ProductViewModel, RemoveProductImageRequestDto>(
  "product/remove-images",
  async (reqData, thunkAPI) => {
    try {
      const { data } = await ProductService.removeImages(reqData);

      thunkAPI.dispatch(snackbarSlice.actions.openSnackbar({ message: "Images removed", severity: "success" }));

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Unknown Error");
    }
  },
);
