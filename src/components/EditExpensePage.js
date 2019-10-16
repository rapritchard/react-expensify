import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveExpenseModal from './RemoveExpenseModal';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      removeExpense: false,
    };
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.setState(() => ({ removeExpense: true }));
  };

  handleDoNotRemoveExpense = () => {
    this.setState(() => ({ removeExpense: false }));
  }

  handleRemoveExpense = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button is-danger" onClick={this.onRemove}>
          Remove
          </button>
        </div>
        <RemoveExpenseModal
          removeExpense={this.state.removeExpense}
          handleRemoveExpense={this.handleRemoveExpense}
          handleDoNotRemoveExpense={this.handleDoNotRemoveExpense}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
