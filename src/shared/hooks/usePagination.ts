import { ChangeEvent, useEffect, useState } from "react";

type UsePaginationParams = {
  initialPage?: number;
  initialRowsPerPage?: 6 | 8 | 10;
  onPaginationChangeReq: (params: PaginationConfig) => void;
};

export type PaginationConfig = {
  page: number;
  rowsPerPage: number;
};

type UsePaginationResult = {
  paginationConfig: PaginationConfig;
  handleChangePage: (_: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type UsePagination = (
  params: UsePaginationParams
) => UsePaginationResult;

export const usePagination: UsePagination = ({
  initialPage = 0,
  initialRowsPerPage = 6,
  onPaginationChangeReq,
}) => {
  const [paginationConfig, setPaginationConfig] = useState({
    page: initialPage,
    rowsPerPage: initialRowsPerPage,
  });

  const handleChangePage = (_: unknown, newPage: number) => {
    setPaginationConfig((prevState) => ({ ...prevState, page: newPage }));
  };

  const handleChangeRowsPerPage = (e: ChangeEvent<HTMLInputElement>) => {
    const rowsPerPage = Number(e.target.value) as 6 | 8 | 10;
    setPaginationConfig({ rowsPerPage, page: 0 });
  };

  useEffect(() => {
    onPaginationChangeReq(paginationConfig);
  }, [paginationConfig]);

  return { handleChangePage, handleChangeRowsPerPage, paginationConfig };
};
