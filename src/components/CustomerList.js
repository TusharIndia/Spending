import React from "react";

const CustomerList = ({ customers }) => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl text-center font-bold mb-8">Customer Spending</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Customer</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Total Spending</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(({ customer, total }, index) => (
              <tr key={customer} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="px-6 py-4 border-b border-gray-200">{customer}</td>
                <td className="px-6 py-4 border-b border-gray-200">{total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
