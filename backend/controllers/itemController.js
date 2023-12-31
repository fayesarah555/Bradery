const asyncHandler = require("express-async-handler")

const Item = require("../models/itemModel")
const User = require("../models/userModel")

// @desc get items
// @route GET /api/items/
// access private
const getItems = asyncHandler( async (req, res ) => {
    const items = await Item.find({user: req.user.id})
    res.status(200).json(items)
})

const getAllItems = asyncHandler( async (req, res ) => {
    const items = await Item.find()
    res.status(200).json(items)
})
// @desc create item
// @route POST /api/items
// access private
const createItem = asyncHandler( async (req, res ) => {
    if(!req.body.name && !req.body.description && !req.body.price){
        res.status(400)
        throw new Error("Please add values to yours fields")
    }
    const item = await Item.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        user: req.user.id,
    })
    res.status(200).json(item)
})

// @desc update item
// @route PUT /api/items/id
// access private
const updateItem =  asyncHandler( async (req, res ) => {

    const item = await Item.findById(req.params.id)
    if (!item) {
        res.status(400)
        throw new Error('Item not found')
    } 
    const user = await User.findById(req.user.id)
    // check if user exist
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // check if the user match the item owner
    if(item.user.toString() !== user.id){
        res.status(401)
        throw new Error('You are not authorized to perform this action')
    }
    

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedItem)
})

// @desc delete item
// @route DELETE /api/items/id
// access private
const deleteItem =  asyncHandler( async (req, res ) => {
    const item = await Item.findById(req.params.id)
    if (!item) {
        res.status(400)
        throw new Error('Item not found')
    } 
    const deletedItem = await Item.findOneAndDelete(req.params.id, req.body, {deleted:true})

    res.status(200).json(deletedItem)
})

module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteItem,
    getAllItems
}