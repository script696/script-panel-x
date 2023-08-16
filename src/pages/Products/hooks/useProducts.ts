import { PaginationConfig } from "../../../shared/hooks/usePagination";

export const useProducts = () => {
  // useEffect(() => {
  //   ProductService.getProducts({ page: 0, rowsPerPage: 3 });
  // }, []);
  const handleReqOnPaginationChange = (params: PaginationConfig) => {
    console.log(params);
  };

  return { handleReqOnPaginationChange };
};
