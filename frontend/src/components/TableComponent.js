import React, { useState, useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import "../style.css";
import { useNavigate } from "react-router";
import { convertToDesiredFormat } from "../helpers/helperFunctions";

const TableComponent = ({ data, onEdit, onDelete }) => {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "_id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Content",
        accessor: "content",
      },
      {
        Header: "Date-time",
        accessor: "updatedAt",
        Cell: ({ value }) => convertToDesiredFormat(value)
      },
      {
        Header: "Edit",
        Cell: ({ row }) => (
          <button onClick={() => onEdit(row.original)}>Edit</button>
        ),
      },
      {
        Header: "Delete",
        Cell: ({ row }) => (
          <button onClick={() => onDelete(row.original._id)}>Delete</button>
        ),
      },
    ],
    [onEdit, onDelete]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );

  const [filterInput, setFilterInput] = useState("");
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("title", value);
    setFilterInput(value);
  };

  return (
    <div>
    <div className="list-header">
      <input
        className="search-input"
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search by title"}
      />
    <button onClick={() => navigate("/new")}>New Review</button>
    </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;