const Cart = require("../models/Cart");  // Import the Cart model

// Controller function for adding items to the cart
const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    // Find the cart for the user
    let cart = await Cart.findOne({ userId });

    // If no cart exists for the user, create a new one
    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity }],
      });
      await cart.save();
    } else {
      // If the cart exists, check if the product is already in the cart
      const existingItem = cart.items.find(item => item.productId.toString() === productId);

      if (existingItem) {
        // If the product exists, update the quantity
        existingItem.quantity += quantity;
      } else {
        // If the product doesn't exist in the cart, add it as a new item
        cart.items.push({ productId, quantity });
      }

      // Save the updated cart
      await cart.save();
    }

    // Respond with the updated cart
    res.status(200).json(cart);
  } catch (err) {
    // Handle errors and respond with the error message
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addToCart };
