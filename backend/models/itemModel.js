const mongoose = require("mongoose")

const itemSchema = mongoose.Schema({
    name: { type: String, required: [true, 'Please add a name']},
    description: { type: String, required: [true, 'Please add a description']},
    price: {type: Number, required: [true, 'Please add a price']},
}, {
    timestamps: true
});

// This is the model for Item collection in mongoDB
module.exports = mongoose.model('Item', itemSchema);