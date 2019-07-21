import moment from 'moment';
import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should setup default expenses state ', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newExpense = [{
    id: '4',
    description: 'Water Bill',
    note: '',
    amount: 2500,
    createdAt: 0,
  }];
  const state = expenseReducer(expenses, { type: 'ADD_EXPENSE', expense: newExpense });
  expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', () => {
  const note = 'some note';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { note },
  };
  const state = expenseReducer(expenses, action);
  expect(state[1].note).toEqual(note);
});

test('should not edit expense if id not found', () => {
  const note = 'some note';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { note },
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: expenses[1],
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses[1]);
});
