const ExpenseModal = require("../models/expense.model.js");

const editExpense = (req, res) => {
  const { id, name, date, description, amount, approved } = req.body;

  ExpenseModal.update(
    { _id: id },
    { name, date, description, amount, approved },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end("Updated Successfully!");
      }
    }
  );
};

module.exports = editExpense;
