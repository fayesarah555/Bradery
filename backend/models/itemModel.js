const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { 
        type: String,
        required: [true, 'Please add a name'] 
    },
    description: {
        type: String, 
        required: [true, 'Please add a description'] 
    },
    price: { 
        type: Number, 
        required: [true, 'Please add a price'] 
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Item', itemSchema)
