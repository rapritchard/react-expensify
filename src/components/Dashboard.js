import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expenseListFilters';

const Dashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default Dashboard;
