const ExpenseModal = require("../models/expense.model.js");

const expenses = {};

expenses.getExpenses = (req, res) => {
  ExpenseModal.find({}).exec((err, data) => {
    if (err) {
      res.status(400).send(`There Is An Error ${err}`);
    } else {
      res.end(JSON.stringify(data));
    }
  });
};

expenses.getExpensesByMonth = (req, res) => {
  ExpenseModal.find({
    date: {
      $gte: `${req.params.year}-${req.params.month}-01T00:00:00.000+00:00`,
      $lte: `${req.params.year}-${req.params.month}-31T00:00:00.000+00:00`,
    },
  }).exec((err, data) => {
    if (err) {
      res.status(400).send(`There Is An Error ${err}`);
    } else {
      res.end(JSON.stringify(data));
    }
  });
};

module.exports = expenses;
