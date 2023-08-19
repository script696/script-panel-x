import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addImagesThunk,
  createProductThunk,
  getProductsThunk,
  removeProductsThunk,
  updateProductMainInfoThunk,
} from "./productThunk";
import { ProductsViewModel, ProductViewModel } from "./types/typedef";
import { RemoveProductResponseDto } from "../../../../../shared/api/product/dto/RemoveProductDto";

export type ProductsState = {
  productsData: ProductsViewModel;
  ui: {
    isProductEditModalOpen: boolean;
    isProductDeleteModalOpen: boolean;
  };
  productsTable: {
    pagination: { page: number; rowsPerPage: number };
    selectedRows: Array<string>;
  };
  productCandidate: ProductViewModel | undefined;
  isLoading: boolean;
  error: string;
};

const initialState: ProductsState = {
  productsData: { products: [], total: 0 },
  ui: {
    isProductEditModalOpen: false,
    isProductDeleteModalOpen: false,
  },
  productsTable: {
    pagination: { page: 0, rowsPerPage: 6 },
    selectedRows: [],
  },
  productCandidate: undefined,
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeSelectedRows: (state, { payload }: PayloadAction<Array<string>>) => {
      state.productsTable.selectedRows = payload;
    },
    deleteProducts: (state, { payload }: PayloadAction<Array<string>>) => {
      state.ui.isProductDeleteModalOpen = true;
      state.productsTable.selectedRows = state.productsTable.selectedRows.length
        ? state.productsTable.selectedRows
        : payload;
    },
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
    toggleDeleteProductModal: (state, { payload }: PayloadAction<boolean>) => {
      state.ui.isProductDeleteModalOpen = payload;
      state.productsTable.selectedRows = payload
        ? state.productsTable.selectedRows
        : [];
    },
    changePagination: (
      state,
      { payload }: PayloadAction<{ page: number } | { rowsPerPage: number }>
    ) => {
      if ("page" in payload) {
        state.productsTable.pagination.page = payload.page;
      } else {
        state.productsTable.pagination = {
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
    [createProductThunk.fulfilled.type]: (state) => {
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
    /* updateProduct */
    [removeProductsThunk.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = "";
      state.ui.isProductDeleteModalOpen = false;
      state.productsTable.selectedRows = [];
    },
    [removeProductsThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [removeProductsThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
    /* add images */
    [addImagesThunk.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ProductViewModel>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.ui.isProductEditModalOpen = false;
      state.productsData.products = state.productsData.products.map((product) =>
        product.id === payload.id ? payload : product
      );
    },
    [addImagesThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addImagesThunk.rejected.type]: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default productsSlice.reducer;
