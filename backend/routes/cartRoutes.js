const express = require('express');
const { get } = require('mongoose')
const router = express.Router();
const {
  getCartById,
  createCart,
  updateCart,
  deleteCart,
} = require('../controllers/cartController');

// Définir les routes pour les paniers

router.route('/').post(createCart)
router.route('/:id').put( updateCart).delete(deleteCart).get(getCartById)
module.exports = router;
