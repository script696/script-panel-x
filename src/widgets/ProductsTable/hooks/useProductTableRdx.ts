import { productsSlice } from "app/store/reducers/products/productsSlice";
import { useAppDispatch, useAppSelector } from "app/store";

export const useProductTableRdx = () => {
  const dispatch = useAppDispatch();
  const { changePagination } = productsSlice.actions;
  const productsState = useAppSelector((state) => state.productReducer);

  const handleChangePagination = (params: { page: number } | { rowsPerPage: number }) => {
    dispatch(changePagination(params));
  };

  return { handleChangePagination, productsState };
};
