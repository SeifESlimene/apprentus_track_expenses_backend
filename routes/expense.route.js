const express = require("express");

const expenses = require("../controllers/getExpenses");
const addExpense = require("../controllers/addExpense");
const editExpense = require("../controllers/editExpense");
const deleteExpense = require("../controllers/deleteExpense");
const getExpenseById = require("../controllers/getExpenseById");

const router = express.Router();

const { getExpenses, getExpensesByMonth } = expenses;

router.get("/expenses", getExpenses);
router.get("/expenses/:year/:month", getExpensesByMonth);
router.get("/expenses/:id", getExpenseById);
router.post("/expenses/add", addExpense);
router.post("/expenses/edit", editExpense);
router.delete("/expenses/delete/:id", deleteExpense);

module.exports = router;
