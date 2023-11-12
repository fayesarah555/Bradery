const Cart = require('../models/cartModel');
const asyncHandler =require('express-async-handler')

// @desc get cart
// @route GET /api/cart/
// access public
exports.getCartById =asyncHandler( async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        if (!cart) {
            res.status(400)
            throw new Error('Cart not found')
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// @desc create cart
// @route POST /api/cart/
// access public
exports.createCart =asyncHandler( async (req, res) => {
    const cart = new Cart({
        user: req.body.user,
        items: req.body.items || [],
    });

    try {
        const newCart = await cart.save();
        res.status(201).json(newCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// @desc update cart
// @route PUT /api/cart/id
// access public
exports.updateCart = asyncHandler( async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(updatedCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// @desc delete cart
// @route DELETE /api/cart/id
// access public
exports.deleteCart = asyncHandler( async (req, res) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id);
        if (!deletedCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json({ message: 'Cart deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
