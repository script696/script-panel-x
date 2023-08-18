import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createProductThunk,
  getProductsThunk,
  updateProductMainInfoThunk,
} from "./productThunk";
import { ProductsViewModel, ProductViewModel } from "./types/typedef";

export type ProductsState = {
  productsData: ProductsViewModel;
  ui: {
    isProductEditModalOpen: boolean;
  };
  productCandidate: ProductViewModel | undefined;
  productTablePagination: { page: number; rowsPerPage: number };
  isLoading: boolean;
  error: string;
};

const initialState: ProductsState = {
  productsData: { products: [], total: 0 },
  productTablePagination: { page: 0, rowsPerPage: 3 },
  ui: {
    isProductEditModalOpen: false,
  },
  productCandidate: undefined,
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleEditProductModal: (state, { payload }: PayloadAction<boolean>) => {
      state.ui.isProductEditModalOpen = payload;
    },
    openEditProductModal: (
      state,
      { payload }: PayloadAction<ProductViewModel | undefined>
    ) => {
      state.productCandidate = payload;
      state.ui.isProductEditModalOpen = true;
    },
    closeEditProductModal: (state) => {
      state.ui.isProductEditModalOpen = false;
    },
    changePagination: (
      state,
      { payload }: PayloadAction<{ page: number } | { rowsPerPage: number }>
    ) => {
      if ("page" in payload) {
        state.productTablePagination = {
          ...state.productTablePagination,
          page: payload.page,
        };
      } else {
        state.productTablePagination = {
          page: 0,
          rowsPerPage: payload.rowsPerPage,
        };
      }
    },
  },
  extraReducers: {
    /* getProducts */

    [getProductsThunk.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ProductsViewModel>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.productsData = payload;
    },
    [getProductsThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProductsThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* createProduct */
    [createProductThunk.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ProductViewModel>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.productsData.total = state.productsData.total + 1;
      state.ui.isProductEditModalOpen = false;
      state.productCandidate = undefined;
    },
    [createProductThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createProductThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* updateProduct */
    [updateProductMainInfoThunk.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ProductViewModel>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.productsData.products = state.productsData.products.map(
        (product) => {
          return product.id === payload.id ? payload : product;
        }
      );
      state.ui.isProductEditModalOpen = false;
      state.productCandidate = undefined;
    },
    [updateProductMainInfoThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [updateProductMainInfoThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default productsSlice.reducer;
