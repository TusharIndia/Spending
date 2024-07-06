import React from 'react';

const Filter = ({ filter, setFilter, filteredCustomers }) => {
  return (
    <div className="container mx-auto mt-10">
      <input
        type="text"
        placeholder="Filter by customer name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {filter && (
        <ul className="mt-2 border border-gray-300 rounded max-h-48 overflow-y-auto">
          {filteredCustomers.map(({ customer ,total}) => (
            <li
              key={customer}
              onClick={() => setFilter(customer)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {customer} - {total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
