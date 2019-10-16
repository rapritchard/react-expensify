import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const RemoveExpenseModal = props => (
  <Modal
    isOpen={props.removeExpense}
    onRequestClose={props.handleDoNotRemoveExpense}
    contentLabel="Remove Expense"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Remove Expense</h3>
    <p>Are you sure you want to remove this expense?</p>
    <div className="modal__actions">
      <button className="button is-danger" type="button" onClick={props.handleRemoveExpense}>Remove</button>
      <button className="button is-primary " type="button" onClick={props.handleDoNotRemoveExpense}>Keep</button>
    </div>
  </Modal>
);

export default RemoveExpenseModal;
