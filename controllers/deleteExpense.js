const ExpenseModal = require("../models/expense.model.js");

const deleteExpense = (req, res) => {
  const { id } = req.params;

  ExpenseModal.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log("There is an error while deleting!");
    } else {
      res.json({ message: "Deleted Successfuly" });
    }
  });
};

module.exports = deleteExpense;
