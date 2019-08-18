import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import Dashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
