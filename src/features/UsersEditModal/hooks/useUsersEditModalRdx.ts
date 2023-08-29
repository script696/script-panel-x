import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import { productsSlice } from "../../../app/providers/StoreProvider/reducers/products/productsSlice";
import { AddProductImagesRequestDto } from "../../../shared/api/product/dto/AddProductImagesDto";
import {
  addImagesThunk,
  createProductThunk,
  getProductsThunk,
  removeImagesThunk,
  updateProductMainInfoThunk,
  updateProductSecondaryInfoThunk,
} from "../../../app/providers/StoreProvider/reducers/products/productThunk";
import { RemoveProductImageRequestDto } from "../../../shared/api/product/dto/RemoveProductImagesDto";
import {
  ProductCreateMainInfo,
  ProductEditMainInfo,
  ProductViewModel,
} from "../../../app/providers/StoreProvider/reducers/products/types/typedef";
import { usersSlice } from "../../../app/providers/StoreProvider/reducers/users/usersSlice";
import {
  UserCreateMainInfo,
  UserEditMainInfo,
} from "../../../app/providers/StoreProvider/reducers/user/types/typedef";
import {
  createUserThunk,
  editUsersThunk,
} from "../../../app/providers/StoreProvider/reducers/users/usersThunk";
import { checkIsUserMainInfo } from "../guards/checkIsUserMainInfo";

export const useUsersEditModalRdx = () => {
  const dispatch = useAppDispatch();

  const { toggleEditUserModal } = usersSlice.actions;
  const usersState = useAppSelector((state) => state.usersReducer);

  const handleCloseModal = () => {
    dispatch(toggleEditUserModal(false));
  };

  const handleSubmitUserMainInfo = async (
    userMainInfo: UserEditMainInfo | UserCreateMainInfo
  ) => {
    if (checkIsUserMainInfo(userMainInfo)) {
      dispatch(createUserThunk(userMainInfo));
    } else {
      console.log("edit");
    }
  };

  const handleUpdateProductSecondaryInfo = (
    data: Pick<ProductViewModel, "description" | "id">
  ) => {
    // dispatch(updateProductSecondaryInfoThunk(data));
  };

  return {
    usersState,
    handleCloseModal,
    handleSubmitUserMainInfo,
    handleUpdateProductSecondaryInfo,
  };
};
