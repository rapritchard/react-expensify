// Take array of expense objects, map numbers to an array,
// then reduce array of numbers into a total. 
// If no expenses passed in, will always return 0.
// Simplez
export default (expenses) => {
  return expenses
    .map(expense => expense.amount)
    .reduce((acc, amount) => acc + amount, 0);
};
