import React from 'react';

const TopCustomer = ({ customer, total }) => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl text-center font-bold">Top Customer</h2>
      {customer ? (
        <p className="text-center mt-4">{customer}: ${total}</p>
      ) : (
        <p className="text-center mt-4">No customer found</p>
      )}
    </div>
  );
};

export default TopCustomer;
