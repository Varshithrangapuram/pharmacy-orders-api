const express = require("express");
const { addOrder, getOrders, deleteOrder } = require("../controllers/orderController");
const router = express.Router();

router.post("/", addOrder); // Add a new order
router.get("/", getOrders); // Get all orders
router.delete("/:id", deleteOrder); // Delete an order by ID

module.exports = router;
