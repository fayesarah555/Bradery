const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;


connectDB()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/items', require('./routes/itemRoutes'))
app.use('/api/users', require('./routes/userRoutes'));
app.use('api/cart', require('./routes/cartRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log(`server started on port ${port}`))