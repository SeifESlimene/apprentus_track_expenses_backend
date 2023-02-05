const mongoose = require("mongoose");
const { Schema } = mongoose;
const expenseSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true, min: 20 },
    amount: { type: Number, required: true, min: 0 },
    approved: { type: Number, required: true },
  },
  { timestamps: { createdAt: "created_at" } }
);

const expenseModel = new mongoose.model("Expense", expenseSchema);

module.exports = expenseModel;
