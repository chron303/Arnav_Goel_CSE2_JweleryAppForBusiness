const Order = require('../models/Order'); // Import the Order model

// Controller for creating an order
exports.createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;

    // Create a new order
    const newOrder = new Order({
      userId,
      items,
      totalAmount
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();

    // Return the saved order
    res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ error: 'There was an error processing the order' });
  }
};
