import { ChangeEvent } from "react";

type UsePaginationParams = {
  onChangePagination: (params: { page: number } | { rowsPerPage: number }) => void;
};

export type PaginationConfig = {
  page: number;
  rowsPerPage: number;
};

type UsePaginationResult = {
  handleChangePage: (_: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (e: ChangeEvent<HTMLInputElement>) => void;
};
export type UsePagination = (params: UsePaginationParams) => UsePaginationResult;

export const usePagination: UsePagination = ({ onChangePagination }) => {
  const handleChangePage = (_: unknown, newPage: number) => {
    onChangePagination({ page: newPage });
  };

  const handleChangeRowsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
    const rowsPerPage = Number(e.target.value) as 6 | 8 | 10;
    onChangePagination({ rowsPerPage });
  };

  return { handleChangePage, handleChangeRowsPerPage };
};
