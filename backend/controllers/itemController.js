// @desc get items
// @route GET /api/items/
// access private
const getItems = (req, res ) => {
    res.status(200).json({message: "Get Items"})
}

// @desc create item
// @route POST /api/items
// access private
const createItem = (req, res ) => {
    res.status(200).json({message: "Create Items"})
}

// @desc update item
// @route PUT /api/items/id
// access private
const updateItem = (req, res ) => {
    res.status(200).json({message: `Update Item ${req.params.id}`})
}

// @desc delete item
// @route DELETE /api/items/id
// access private
const deleteItem = (req, res ) => {
    res.status(200).json({message: `Delete Item ${req.params.id}`})
}

module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteItem
}