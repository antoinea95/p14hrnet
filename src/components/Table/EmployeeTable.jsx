import {
  Button,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {PiArrowRightBold, PiArrowLeftBold, PiArrowLineLeftBold, PiArrowLineRightBold } from 'react-icons/pi';
import {LiaChevronCircleUpSolid, LiaChevronCircleDownSolid} from 'react-icons/lia';
import { useMemo, useState } from "react";
import { tableColumns } from "./columns";

export default function EmployeeTable({ tableData }) {

    // sort and search in table
  const [sorting, setSorting] = useState();
  const [globalFilter, setGlobalFilter] = useState(null);
    // define table content
  const data = useMemo(() => (tableData ? tableData : []), [tableData]);
  const columns = useMemo(() => tableColumns, [tableColumns]);

  // stock search value
  const handleGlobalFilterChange = (e) => {
    setGlobalFilter(e.target.value);
  };


  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });


  return (
    <article className="table-container">
      <input
        type="text"
        value={globalFilter || ""}
        onChange={handleGlobalFilterChange}
        placeholder="Rechercher..."
        className="table-filter"
      />
      <TableContainer>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{ onClick: header.column.getToggleSortingHandler() }}
                      style={{ cursor: "pointer" }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <LiaChevronCircleUpSolid style={{width: "100%"}} />,
                        desc: <LiaChevronCircleDownSolid style={{width: "100%"}} />,
                      }[header.column.getIsSorted()] ?? null}
                    </div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.length > 0 ? table
            .getRowModel()
            .rows.filter((row) => {
                if(globalFilter !== null) {
                const rowData = row.original;
                return Object.keys(rowData).some((key) => {
                  const cellValue = rowData[key];
                  return (
                    cellValue &&
                    cellValue
                      .toString()
                      .includes(globalFilter)
                  );
                }); } else {
                    return true;
                }
            })
            .map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            )) : <TableRow>
                <TableCell colSpan={9}>
                <div className="table-empty">
                    No employee
                </div>
                </TableCell>
                </TableRow>}
        </TableBody>
      </Table>
      </TableContainer>
      <div className="table-pagination" >
        <div className="table-pagination_controller">
        <Button
          variant="contained"
          color="tertiary"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </Button>
        <Button
          variant="contained"
          color="tertiary"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </Button>
        <Button
         variant="contained"
         color="tertiary"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </Button>
        <Button
         variant="contained"
         color="tertiary"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </Button>
        </div>
        <span className="table-pagination_state">
          Page {" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
       {table.getPageCount() > 0 && <div className="table-pagination_input">
        <Select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <MenuItem key={pageSize} value={pageSize}>
              Show {pageSize}
            </MenuItem>
          ))}
        </Select>
        </div>}
      </div>
    </article>
  );
}
