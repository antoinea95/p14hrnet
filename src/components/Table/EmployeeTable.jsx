import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
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
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted()] ?? null}
                    </div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table
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
            ))}
        </TableBody>
      </Table>
    </article>
  );
}
