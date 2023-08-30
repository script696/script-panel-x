import { useAppDispatch, useAppSelector } from "../../../app/store";
import { productsSlice } from "../../../app/store/reducers/products/productsSlice";
import { AddProductImagesRequestDto } from "../../../shared/api/product/dto/AddProductImagesDto";
import {
  addImagesThunk,
  createProductThunk,
  getProductsThunk,
  removeImagesThunk,
  updateProductMainInfoThunk,
  updateProductSecondaryInfoThunk,
} from "../../../app/store/reducers/products/productThunk";
import { RemoveProductImageRequestDto } from "../../../shared/api/product/dto/RemoveProductImagesDto";
import {
  ProductCreateMainInfo,
  ProductEditMainInfo,
  ProductViewModel,
} from "../../../app/store/reducers/products/types/typedef";

export const useProductEditModalRdx = () => {
  const dispatch = useAppDispatch();

  const { toggleEditProductModal } = productsSlice.actions;
  const productsState = useAppSelector((state) => state.productReducer);

  const handleAddImages = (data: AddProductImagesRequestDto) => {
    dispatch(addImagesThunk(data));
  };

  const handleDeleteImages = (data: RemoveProductImageRequestDto) => {
    dispatch(removeImagesThunk(data));
  };

  const handleCloseModal = () => {
    dispatch(toggleEditProductModal(false));
  };

  const handleSubmitProductMainInfo = async (
    productMainInfo: ProductEditMainInfo | ProductCreateMainInfo
  ) => {
    if ("id" in productMainInfo && productMainInfo.id) {
      await dispatch(updateProductMainInfoThunk(productMainInfo));
    } else {
      await dispatch(createProductThunk(productMainInfo));
    }
    await dispatch(getProductsThunk(productsState.productsTable.pagination));
  };

  const handleUpdateProductSecondaryInfo = (
    data: Pick<ProductViewModel, "description" | "id">
  ) => {
    dispatch(updateProductSecondaryInfoThunk(data));
  };

  return {
    productsState,
    handleAddImages,
    handleDeleteImages,
    handleCloseModal,
    handleSubmitProductMainInfo,
    handleUpdateProductSecondaryInfo,
  };
};
