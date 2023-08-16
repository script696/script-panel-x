import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProductsThunk } from "./productThunk";
import { ProductsViewModel, ProductViewModel } from "./types/typedef";

export type ProductsState = {
  productsData: ProductsViewModel;
  ui: {
    isProductEditModalOpen: boolean;
  };
  productToAddCandidate: ProductViewModel | undefined;
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
  productToAddCandidate: undefined,
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
      state.productToAddCandidate = payload;
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
      state.ui.isProductEditModalOpen = false;
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
  },
});

export default productsSlice.reducer;
