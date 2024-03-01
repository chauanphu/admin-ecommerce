import React, { useState } from "react";
import Pagination from "./Pagniation";

interface TableProps {
  title?: string;
  data: any[];
  columns: string[];
}

export default function EditableTable({ title, data, columns }: TableProps) {
  const [tableData, setTableData] = useState(data);

  const handleCellChange = (
    rowIndex: number,
    columnIndex: number,
    value: any
  ) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][columnIndex] = value;
    setTableData(updatedData);
  };

    function handleAddRecord(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        const newRecord = columns.map(() => "");
        setTableData([...tableData, newRecord]);
    }

  return (
    <>
      <div>
        { title && <h2>{title}</h2>}
        <button onClick={handleAddRecord}>Add</button>
        <button onClick={handleAddRecord}>Update</button>
        <button onClick={handleAddRecord}>Delete</button>
        <button onClick={handleAddRecord}>Save</button>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    type="text"
                    value={cell? cell : "null"}
                    onChange={(e) =>
                      handleCellChange(rowIndex, columnIndex, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={0} itemPerPage={12} totalItems={20} onPageChange={function (pageNumber: number): void {
        throw new Error("Function not implemented.");
      } }/>
    </>
  );
}
