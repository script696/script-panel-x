import { PaginationConfig } from "../../../shared/hooks/usePagination";

export const useProducts = () => {
  const handleReqOnPaginationChange = (params: PaginationConfig) => {
    console.log(params);
  };

  return { handleReqOnPaginationChange };
};
