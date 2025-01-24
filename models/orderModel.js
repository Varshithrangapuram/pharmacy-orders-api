const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customerName: { type: String, required: true },
    medicineName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
