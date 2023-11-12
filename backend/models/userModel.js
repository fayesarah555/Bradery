const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    cart: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: false,
        ref: 'Cart' 
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)