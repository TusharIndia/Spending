import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import TopCustomer from './components/TopCustomer';
import Filter from './components/Filter';
import Header from './components/Header';

const initialData = [
  { id: 't_01', customer: 'Rose Roberts', amount: 84 },
  { id: 't_02', customer: 'Chris Cook', amount: 30 },
  { id: 't_03', customer: 'Mary Martin', amount: 42 },
  { id: 't_04', customer: 'Susan Smith', amount: 26 },
  { id: 't_05', customer: 'Rose Roberts', amount: -84 },
  { id: 't_06', customer: 'Rose Roberts', amount: 48 },
  { id: 't_07', customer: 'Susan Smith', amount: 104 },
  { id: 't_08', customer: 'Larry Lewis', amount: 140 },
  { id: 't_09', customer: 'Mary Martin', amount: 10 },
  { id: 't_10', customer: 'Chris Cook', amount: 60 },
  { id: 't_11', customer: 'Susan Smith', amount: -26 },
  { id: 't_12', customer: 'Larry Lewis', amount: -140 },
  { id: 't_13', customer: 'Rose Roberts', amount: 26 },
  { id: 't_14', customer: 'Ryan Roberts', amount: 44 }
];

const App = () => {
  const [customers, setCustomers] = useState(initialData);
  const [filter, setFilter] = useState(localStorage.getItem('filter') || '');

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);

  const totalSpending = customers.reduce((acc, curr) => {
    acc[curr.customer] = (acc[curr.customer] || 0) + curr.amount;
    return acc;
  }, {});

  const filteredCustomers = Object.keys(totalSpending).filter(customer =>
    customer.toLowerCase().includes(filter.toLowerCase())
  ).map(customer => ({
    customer,
    total: totalSpending[customer]
  }));

  const topCustomer = filteredCustomers.reduce((max, curr) => curr.total > max.total ? curr : max, { total: 0 });

  return (
    <Router>
    <Header/>
        <Routes>
          <Route path="/filter" element={<Filter filter={filter} setFilter={setFilter} filteredCustomers={filteredCustomers}/>} />
          <Route path="/topcustomer" element={<TopCustomer customer={topCustomer.customer} total={topCustomer.total} />} />
          <Route path="/customer_spending" element={<CustomerList customers={filteredCustomers} />} />
          <Route path="/" element={
            <div className="text-center mt-10">
              <h1 className="text-4xl font-bold">Welcome to my App</h1>
              <p className="mt-4">Use the Above Header to perform the function you want.</p>
            </div>
          } />
        </Routes>
    </Router>
  );
}

export default App;
