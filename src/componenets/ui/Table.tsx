import React, { type FC } from "react";
import { type Product } from "~/pages/products";

interface TableProps {
  headers: string[];
  products: Product[];
  toggleProductSidebar: (product: Product) => void;
}

const Table: FC<TableProps> = ({ headers, products, toggleProductSidebar }) => {
  return (
    <>
      <div className="h-screen overflow-x-auto p-2">
        <table className="min-w-full divide-y-2 divide-gray-200 border-t-2 bg-white text-sm">
          <thead className="text-center">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {products.map((tableRowData) => (
              <tr onClick={() => toggleProductSidebar(tableRowData)} key={tableRowData.id} className="odd:bg-gray-50 cursor-pointer hover:bg-gray-200">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {tableRowData.id}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {tableRowData.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {tableRowData.description}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {tableRowData.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
