const express = require('express')
const { get } = require('mongoose')
const router = express.Router()
const {
    getItems,
    createItem,
    updateItem,
    deleteItem,
    getAllItems,
} = require("../controllers/itemController")
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getItems).post(protect,createItem)
router.route('/all').get(getAllItems)
router.route('/:id').put(protect,updateItem).delete(protect,deleteItem)


module.exports = router