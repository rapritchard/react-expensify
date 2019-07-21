import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => async (dispatch) => {
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = expenseData;

  const expense = {
    description, note, amount, createdAt,
  };

  try {
    const ref = await database.ref('expenses').push(expense);
    dispatch(addExpense({
      id: ref.key,
      ...expense,
    }));
  } catch (error) {
    throw new Error('Unable to add expense data.');
  }
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const startRemoveExpense = ({ id } = {}) => async (dispatch) => {
  try {
    await database.ref(`expenses/${id}`).remove();
    dispatch(removeExpense({ id }));
  } catch (erro) {
    throw new Error('Unable to remove expense.');
  }
};
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => async (dispatch) => {
  try {
    const snapshot = await database.ref('expenses').once('value');
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      });
    });
    dispatch(setExpenses(expenses));
  } catch (error) {
    throw new Error('Unable to fetch expenses data.');
  }
};
