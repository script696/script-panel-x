import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import React, { FC, useState } from "react";
import Empty from "../../../shared/components/Empty/Empty";
import * as selectUtils from "../../../shared/utils/selectUtils";
import { ProductsTableRow } from "./ProductsTableRow";
import { ProductsTableHead } from "./ProductsTableHead";
import { checkIsRowSelected } from "../utils/checkIsRowSelected";
import {
  PaginationConfig,
  usePagination,
} from "../../../shared/hooks/usePagination";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import { ProductViewModel } from "../../../app/providers/StoreProvider/reducers/products/types/typedef";
import { productsSlice } from "../../../app/providers/StoreProvider/reducers/products/productsSlice";

type ProductsTableProps = {
  processing: boolean;
  onDelete: (productsIds: string[]) => void;
  onEdit: (product: ProductViewModel) => void;
  onSelectedChange: (selected: string[]) => void;
  onPaginationChangeReq: (params: PaginationConfig) => void;
  selected: string[];
  // products?: Array<ProductViewModel>;
};

const ProductsTable: FC<ProductsTableProps> = ({
  onDelete,
  onEdit,
  onSelectedChange,
  processing,
  selected,
  onPaginationChangeReq,
}) => {
  const { productsData, isLoading, error, productTablePagination } =
    useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  const { changePagination } = productsSlice.actions;

  const { handleChangePage, handleChangeRowsPerPage } = usePagination({
    onChangePagination: (params) => dispatch(changePagination(params)),
  });

  const { products, total } = productsData;

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = selectUtils.selectAll(products);
      onSelectedChange(newSelecteds);
      return;
    }
    onSelectedChange([]);
  };

  const handleClick = (id: string) => {
    let newSelected: string[] = selectUtils.selectOne(selected, id);
    onSelectedChange(newSelected);
  };

  if (products.length === 0) {
    return <Empty title="No products yet" />;
  }

  return (
    <React.Fragment>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          sx={{
            minWidth: 600,
            borderCollapse: "separate",
            borderSpacing: "0 1rem",
          }}
        >
          <ProductsTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={products.length}
          />
          <TableBody>
            {products.map((product, index) => (
              <ProductsTableRow
                index={index}
                key={product.id}
                onCheck={handleClick}
                onDelete={onDelete}
                onEdit={onEdit}
                processing={processing}
                selected={checkIsRowSelected(selected, product.id)}
                product={product}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 8, 10]}
        component="div"
        count={total}
        rowsPerPage={productTablePagination.rowsPerPage}
        page={productTablePagination.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
};

export default ProductsTable;
