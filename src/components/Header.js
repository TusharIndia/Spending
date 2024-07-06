import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-around text-white">
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/filter">Filter</Link>
        </li>
        <li>
          <Link to="/topcustomer">Top Customer</Link>
        </li>
        <li>
          <Link to="/customer_spending">Customer Spending</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
